package main

import (
	"context"
	"errors"
	"log/slog"
	"net"
	"net/http"

	"github.com/google/go-github/v62/github"
)

var githubWebhookSecret []byte = nil

func main() {
	if err := run(); err != nil {
		panic(err)
	}
}

func run() error {
	m := http.NewServeMux()

	m.HandleFunc("/webhook", func(w http.ResponseWriter, r *http.Request) {
		err := githubWebhook(r)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			slog.With(err).Error("error from GitHub Webhook handler")
		}
	})

	// Wrap the mux with our access logging middleware
	handler := accessLogMiddleware(m)

	slog.With("bind", ":8080").Info("starting http server")
	err := http.ListenAndServe(":8080", handler)
	if err != nil && err != net.ErrClosed {
		return err
	}

	return nil
}

func githubWebhook(r *http.Request) error {
	payload, err := github.ValidatePayload(r, githubWebhookSecret)
	if err != nil {
		return err
	}

	event, err := github.ParseWebHook(github.WebHookType(r), payload)
	if err != nil {
		return err
	}

	ctx := r.Context()

	switch event := event.(type) {
	case *github.PushEvent:
		for _, commit := range event.Commits {
			err := checkCommit(ctx, commit)
			if err != nil {
				return err
			}
		}
		// case *github.CommitCommentEvent:
		// 	processCommitCommentEvent(event)
		// case *github.CreateEvent:
		// 	processCreateEvent(event)
	}

	return nil
}

func checkCommit(ctx context.Context, commit *github.HeadCommit) error {
	return errors.New("not yet implemented")
}
