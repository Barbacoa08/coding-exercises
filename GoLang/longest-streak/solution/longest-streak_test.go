package streak

import (
	"testing"
)

const MaxInt = int(^uint(0) >> 1)

type TestCases struct {
	arr  []bool
	n    int
	want int
}

func TestFindLongestStreak(t *testing.T) {
	t.Run("should handle no values passed", func(t *testing.T) {
		cases := []TestCases{
			{[]bool{}, MaxInt, 0},
			{[]bool{true, true}, MaxInt, 0},
			{[]bool{true, false, true}, 2, 0},
		}
		for _, c := range cases {
			got := LongestStreak(c.arr, c.n)
			if got != c.want {
				t.Errorf("expected %d, got %d", c.want, got)
			}
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
