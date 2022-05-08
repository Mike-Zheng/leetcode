func removeDigit(number string, digit byte) string {

	var waitDelete = 0

	for i, v := range number {

		if int(v) == int(digit) {

			if i < len(number)-1 && int(number[i+1]) > int(number[i]) {
				waitDelete = i
				break
			}

			waitDelete = i
		}

	}

	return number[:waitDelete] + number[waitDelete+1:]
}