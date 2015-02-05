BIN = node_modules/.bin
JSHINT = $(BIN)/jshint
MOCHA = $(BIN)/_mocha
ISTANBUL = $(BIN)/istanbul

node_modules: package.json
	@npm install

jshint: node_modules
	$(JSHINT) .

test: jshint
	$(ISTANBUL) cover $(MOCHA)
	$(ISTANBUL) report cobertura

.PHONY: jshint test
