// Add zxcvbn for dictionary check
<script src="https://cdn.jsdelivr.net/npm/zxcvbn@4/dist/zxcvbn.js"></script>
// In analyze: const zxcvbnResult = zxcvbn(pwd); score -= zxcvbnResult.guessesLog10 * 5;