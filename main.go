package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	Message string
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	resp := &Response{Message: fmt.Sprintf("Hi there, I love %s!", r.URL.Path[1:])}
	b, _ := json.Marshal(resp)
	fmt.Fprintf(w, string(b))
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
