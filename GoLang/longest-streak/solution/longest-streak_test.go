package streak

import "testing"

const MaxUint = ^uint(0)
const MinUint = 0
const MaxInt = int(MaxUint >> 1)
const MinInt = -MaxInt - 1

func TestFindLongestStreak(t *testing.T) {
	t.Run("should handle no values passed", func(t *testing.T) {
		if result := LongestStreak([]bool{}, int(^uint(0)>>1)); result != 0 {
			t.Errorf("expected 0, got %d", result)
		}
		if result := LongestStreak([]bool{true, true}, int(^uint(0)>>1)); result != 0 {
			t.Errorf("expected 0, got %d", result)
		}
	})
}
