package answer

import "testing"

func TestTheAnswer(t *testing.T) {
	result := TheAnswer()

	if result != "Is 42, obviously" {
		t.Error("test failed")
	}
}
