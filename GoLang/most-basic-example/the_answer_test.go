package the_answer

import "testing"

func TestKnownResult(t *testing.T) {
	result := KnownResult()

	if result != "known" {
		t.Error("test failed")
	}
}
