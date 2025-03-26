package streak

import "testing"

const MaxUint = ^uint(0)
const MaxInt = int(MaxUint >> 1)

func TestFindLongestStreak(t *testing.T) {
	t.Run("should handle no values passed", func(t *testing.T) {
		if result := LongestStreak([]bool{}, MaxInt); result != 0 {
			t.Errorf("expected 0, got %d", result)
		}
		if result := LongestStreak([]bool{true, true}, MaxInt); result != 0 {
			t.Errorf("expected 0, got %d", result)
		}
	})

	t.Run("should return zero when no streaks exist", func(t *testing.T) {
		if result := LongestStreak([]bool{true, false, true}, 2); result != 0 {
			t.Errorf("expected 0, got %d", result)
		}
	})

	// t.Run("should return zero when all streaks are less than the passed current streak length", func(t *testing.T) {})
	// t.Run("should find streaks of the same length as passed", func(t *testing.T) {})
	// t.Run("should find streaks of larger length as passed", func(t *testing.T) {})
	// t.Run("should handle edge cases", func(t *testing.T) {})

}
