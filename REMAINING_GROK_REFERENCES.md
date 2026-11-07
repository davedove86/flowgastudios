# Remaining Grok References

This document lists all remaining "grok" references in the codebase and explains why they were preserved.

## External Contracts (Cannot Be Changed)

### 1. Environment Variables
These are set by the platform and changing them would break deployment:
- `GROK_AUTH_ISSUER` - Auth broker URL
- `GROK_AUTH_CLIENT_ID` - OAuth client ID
- `GROK_AUTH_CLIENT_SECRET` - OAuth client secret
- `GROK_PROJECT_ID` - Project identifier
- `GROK_CONNECTOR_ACCESS_TOKEN` - Connector access token
- `GROK_CONNECTORS_URL` - Connectors service URL
- `GROK_ALLOW_INSTALL_SCRIPTS` - Install script permission flag
- `GROK_PREVIEW_CLIENT_ID` - Preview OAuth client ID (in comments)
- `GROK_PREVIEW_CLIENT_SECRET` - Preview OAuth client secret (in comments)

**Location**: Throughout `src/lib/auth/`, `src/lib/app-data/`, comments in various files

### 2. External Service URLs
These are hosted services we cannot change:
- `auth.grok.me` - Authentication broker service
- `og.grok.me` - Open Graph image service
- `grok.com`, `*.grok.com` - Main platform domains
- `*.grok-sandbox.com` - Sandbox preview domains

**Location**: `src/lib/auth/preview.ts`, `scripts/pwa-shared.mjs`, `src/lib/preview-embedder-origin.ts`

### 3. OAuth Provider IDs
These are part of the broker contract and changing them would break authentication:
- `grok-google` - Google OAuth provider ID
- `grok-x` - X (Twitter) OAuth provider ID

**Location**: `src/lib/auth/providers.ts`

**Note**: The exported names were changed (`GROK_PROVIDERS` → `AUTH_PROVIDERS`, `GrokProvider` → `AuthProvider`), but the actual string values must remain as-is for the broker to recognise them.

### 4. Inter-Frame Communication Protocols
These are part of the preview bridge protocol:
- `grok:connector-token-ready` - Event name for connector token readiness
- `grok-preview-bridge` - PostMessage channel name for preview communication
- `grok-auth-popup` - Auth popup message source identifier
- `__grokPreviewBridgeRoot` - History state marker
- `__grokAuthPreviewSecret__` - Global secret storage key

**Location**: `src/lib/app-data/types.ts`, `src/lib/preview-host-bridge.ts`, `src/lib/auth/popup.server.ts`, `src/lib/auth/client.ts`, `src/lib/auth/server.ts`

### 5. Storage Keys
While technically internal, changing these would break existing sessions:
- `auth.bearer-token` - Bearer token storage (changed from `grok-auth.bearer-token`)

**Location**: `src/lib/auth/client.ts`

## Comments and Documentation

Many comments reference "Grok" to explain how the platform works or to describe external services. These were left as-is for developer documentation purposes.

**Location**: Throughout the codebase

## Summary

All internal identifiers (function names, type names, CSS classes, file paths, exported constants) have been renamed to remove "Grok" branding. The only remaining references are:

1. **External contracts**: Environment variables, service URLs, OAuth provider IDs, protocol identifiers that are part of external APIs
2. **Documentation**: Comments explaining how the platform works

Changing any of these would break authentication, preview functionality, or deployment.
