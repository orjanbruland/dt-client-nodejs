PROTODIR := .
PROTOC := ../node_modules/.bin/grpc_tools_node_protoc
GRPC_GATEWAY_INCLUDES := googleapis
PKGMAP := Mgoogle/api/annotations.proto=googleapis/google/api
PROTOC_INCLUDES := /usr/local/include
PROTO_JS_OUT = ../lib/pb
GRPC_PLUGIN_JS := ../node_modules/.bin/grpc_tools_node_protoc_plugin

all: proto

proto: proto_js

$(PROTO_JS_OUT):
	mkdir -p $(PROTO_JS_OUT)

proto_js: $(PROTO_JS_OUT)
	@ if ! which $(PROTOC) > /dev/null; then \
		echo "error: npm module grpc-tools not installed" >&2; \
		exit 1; \
	fi
	for dir in $$(find . -name '*.proto' -exec dirname '{}' ';' | sort -u); do \
		$(PROTOC) -I $(PROTOC_INCLUDES) -I $(GRPC_GATEWAY_INCLUDES) -I $(PROTODIR) \
		--js_out=import_style=commonjs,binary:$(PROTO_JS_OUT) \
		--grpc_out=$(PROTO_JS_OUT) --plugin=protoc-gen-grpc=$(GRPC_PLUGIN_JS) \
		$$dir/*.proto; \
	done

.PHONY:
	all \
	proto \
	proto_js
