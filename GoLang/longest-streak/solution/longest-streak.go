package streak

func LongestStreak(arr []bool, n int) int {
	if len(arr) < n || len(arr) < 1 {
		return 0
	}

	uut := arr[0]
	streak := 1
	peak := 1

	for i := 1; i < len(arr); i++ {
		v := arr[i]

		if uut == v {
			streak++
			peak = max(peak, streak)
		} else {
			streak = 1
			uut = v
		}
	}

	if peak >= n {
		return peak
	}
	return 0
}
