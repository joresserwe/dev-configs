# Biome 설정

## 소개

Biome은 JavaScript, TypeScript, JSX, JSON 등을 위한 고성능 포매터 및 린터입니다. 이 프로젝트에서는 Biome을 사용하여 코드의 일관된 포매팅과 기본적인 코드 품질 검사를 수행합니다. ESLint와 함께 사용하여, Biome이 처리하지 못하는 특정 규칙이나 플러그인(예: Next.js, TanStack Query, security 등)은 ESLint가 보완하는 방식으로 구성되어 있습니다.

## 패키지 설치

Biome은 단일 의존성으로 설치할 수 있습니다.

```bash
npm install -D @biomejs/biome
# 또는
yarn add -D @biomejs/biome
# 또는
pnpm add -D @biomejs/biome
```

## 설정 파일

Biome의 설정은 프로젝트 루트와 각 서브 디렉토리(`biome/next`, `biome/typescript`)에 위치한 `biome.json` 파일을 통해 관리됩니다.

- `biome/next/biome.json`: Next.js 프로젝트를 위한 Biome 설정입니다.
- `biome/typescript/biome.json`: 일반 TypeScript 프로젝트를 위한 Biome 설정입니다.

이 파일들에는 포매터, 린터, import 정리, 무시할 파일 경로 등의 설정이 포함되어 있습니다.

## 주요 기능

Biome은 다음과 같은 주요 기능을 제공합니다:

### 포매터 (Formatter)

- 코드 스타일을 일관되게 유지합니다.
- `indentStyle: "space"`, `indentWidth: 2`, `lineWidth: 80`, `lineEnding: "lf"` 등 공통 포매팅 규칙이 적용됩니다.
- JavaScript/TypeScript 코드에 `quoteStyle: "single"`, `trailingCommas: "all"`, `arrowParentheses: "always"`, `semicolons: "asNeeded"` 규칙이 적용됩니다.

### 린터 (Linter)

- 코드의 잠재적인 오류나 비효율적인 패턴을 탐지합니다.
- **권장 규칙 활성화**: `recommended: true`
- **접근성 (a11y)**: `useKeyWithClickEvents`, `useKeyWithMouseEvents` (Next.js 설정에만 해당)
- **스타일 (style)**: `noUselessElse`, `noNegationElse`, `useConsistentArrayType` (shorthand), `useTemplate`
- **의심스러운 (suspicious)**: `noConsoleLog` (warn), `noExplicitAny`, `noArrayIndexKey` (Next.js 설정에만 해당), `noDoubleEquals`, `noEmptyInterface`, `noRedundantUseStrict`
- **정확성 (correctness)**: `useExhaustiveDependencies` (Next.js 설정에만 해당), `noUnusedVariables`, `noUnusedImports`
- **복잡성 (complexity)**: `noUselessFragments` (Next.js 설정에만 해당), `useArrowFunction`, `noBannedTypes`
- **성능 (performance)**: `noDelete`
- **보안 (security)**: `noDangerouslySetInnerHtml` (Next.js 설정에만 해당)
- **네이밍 컨벤션 (nursery.useNamingConvention)**: 다양한 식별자에 대한 네이밍 컨벤션 (`PascalCase`, `camelCase`, `UPPER_CASE`)을 강제합니다. Next.js의 `page.tsx`, `layout.tsx` 파일에서는 `function`에 대해 `camelCase`와 `PascalCase`를 모두 허용하는 예외가 있습니다.

### Import 정리 (Organize Imports)

- Import 문을 자동으로 정렬하고 중복을 제거합니다.

## 사용법

### 전체 프로젝트 검사 및 포매팅

```bash
npx biome check --apply .
```

### 특정 파일 검사 및 포매팅

```bash
npx biome check --apply src/utils/example.ts
```

### 포매팅만 적용

```bash
npx biome format --write .
```

### Linting만 실행 (수정 없음)

```bash
npx biome lint .
```

## ESLint와의 통합

이 프로젝트에서는 Biome이 주로 포매팅과 기본적인 린팅을 담당하며, ESLint는 Biome이 제공하지 않는 특정 기능이나 고급 규칙을 보완하는 역할을 합니다. 예를 들어, `eslint-plugin-security`, `@next/eslint-plugin-next`, `@tanstack/eslint-plugin-query`, `eslint-plugin-better-tailwindcss`와 같은 플러그인은 ESLint를 통해 관리됩니다. `eslint.config.mjs` 파일에서 `eslint-config-biome`을 임포트하여 Biome의 린팅 규칙을 ESLint와 통합하고 있습니다.