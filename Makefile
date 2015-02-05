BIN = node_modules/.bin
JSHINT = $(BIN)/jshint
MOCHA = $(BIN)/_mocha
ISTANBUL = $(BIN)/istanbul

jshint:
	$(JSHINT) --exclude-path .gitignore .

test:
	$(ISTANBUL) cover $(MOCHA)
	$(ISTANBUL) report cobertura

.PHONY: jshint test
