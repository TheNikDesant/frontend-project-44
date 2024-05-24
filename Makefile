
install:
	npm ci

brain-games:
	node bin/brain-games/brain-games.js

brain-even:
	node bin/brain-games/brain-even.js

brain-calc:
	node bin/brain-games/brain-calc.js

brain-gcd:
	node bin/brain-games/brain-gcd.js

brain-progression:
	node bin/brain-games/brain-progression.js

brain-prime:
	node bin/brain-games/brain-prime.js

lint:
	npx eslint .