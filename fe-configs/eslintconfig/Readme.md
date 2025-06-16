# ESLint 설정

## 패키지 설치

### React 프로젝트

```bash
npm install -D eslint\
               @eslint/js\
               @typescript-eslint/eslint-plugin\
               @typescript-eslint/parser\
               eslint-plugin-react\
               eslint-plugin-react-hooks\
               eslint-plugin-import\
               eslint-plugin-prettier\
               eslint-config-prettier\
               eslint-plugin-simple-import-sort\
               eslint-plugin-unicorn\
               eslint-plugin-sonarjs\
               eslint-plugin-security\
               eslint-plugin-jsx-a11y\
               eslint-plugin-unused-imports\
               @next/eslint-plugin-next # Next.js
```

## 패키지 설명

- `eslint`: ESLint 코어 라이브러리
- `@eslint/js`: ESLint 9.x 공식 JavaScript 추천 설정
- `@typescript-eslint/eslint-plugin`: TypeScript 지원을 위한 ESLint 플러그인
- `@typescript-eslint/parser`: TypeScript 지원을 위한 ESLint 파서
- `eslint-plugin-react`: React 관련 ESLint 규칙
- `eslint-plugin-react-hooks`: React Hooks 관련 ESLint 규칙
- `eslint-plugin-import`: import/export 문 관련 ESLint 규칙
- `eslint-plugin-prettier`: Prettier와 ESLint 통합
- `eslint-config-prettier`: Prettier와 충돌을 방지하는 ESLint 규칙
- `eslint-plugin-simple-import-sort`: import 문 자동 정렬을 위한 ESLint 플러그인
- `eslint-plugin-unicorn`: 모던 JavaScript 패턴 강제
- `eslint-plugin-sonarjs`: 버그 방지 및 성능 최적화
- `eslint-plugin-security`: 보안 취약점 탐지
- `eslint-plugin-jsx-a11y`: JSX 접근성 관련 ESLint 규칙
- `eslint-plugin-unused-imports`: 사용하지 않는 import 제거
- `globals`: 전역 변수 정의 (Node.js, 브라우저 등)
- `@next/eslint-plugin-next`: Next.js 최적화 및 Core Web Vitals 규칙

## 주요 기능

### TypeScript 

- `@typescript-eslint/no-explicit-any`: any 타입 사용 금지
- `@typescript-eslint/prefer-nullish-coalescing`: ?? 연산자 사용 권장
- `@typescript-eslint/prefer-optional-chain`: ?. 연산자 사용 권장
- `@typescript-eslint/consistent-type-imports`: type import 강제
- `@typescript-eslint/no-floating-promises`: Promise 처리 강제

### React

- `react/function-component-definition`: Arrow function 컴포넌트 강제
- `react/jsx-no-leaked-render`: 조건부 렌더링 안전성
- `react/jsx-no-constructed-context-values`: Context 값 최적화
- `react/hook-use-state`: useState 사용 패턴 최적화
- `react-hooks/exhaustive-deps`: useEffect deps 완전성 검사

### 코드 품질 및 성능

- `no-console`: console 사용 제한 (warn, error, info만 허용)
- `prefer-const`: const 사용 강제
- `no-magic-numbers`: 매직 넘버 방지
- `complexity`: 복잡도 제한 (12)
- `max-lines-per-function`: 함수당 최대 줄 수 (80)

### Import/Export 관리

- `simple-import-sort/imports`: import 문 자동 정렬
- `unused-imports/no-unused-imports`: 사용하지 않는 import 제거
- `import/no-duplicates`: 중복 import 방지
- `import/first`: import 문을 파일 상단에 배치

### 보안 및 접근성

- `security/detect-unsafe-regex`: 안전하지 않은 정규식 탐지
- `security/detect-object-injection`: Object injection 방지
- `jsx-a11y/...`: 웹 접근성 규칙 (ARIA, 키보드 접근성 등)

### 모던 JS 패턴 (Unicorn)

- `unicorn/prefer-spread`: spread 연산자 사용 권장
- `unicorn/prefer-string-slice`: slice() 사용 권장
- `unicorn/prefer-array-some`: some() 사용 권장
- `unicorn/filename-case`: 파일명 케이스 일관성

### 버그 방지 (SonarJS)

- `sonarjs/cognitive-complexity`: 인지 복잡도 제한 (15)
- `sonarjs/no-duplicate-string`: 중복 문자열 방지
- `sonarjs/prefer-immediate-return`: 즉시 반환 권장
- `sonarjs/no-identical-expressions`: 동일한 표현식 방지

### Next.js 전용 기능

- `@next/next/no-img-element`: `<img>` 대신 `<Image>` 사용 강제
- `@next/next/no-html-link-for-pages`: 내부 링크에 `<Link>` 사용 강제
- Core Web Vitals 최적화 규칙

## 사용법

- `[react|next]/eslint.config.js` 를 프로젝트 경로 Root에 넣으세요.
- 관련 eslint 패키지들을 설치하세여.

### 검사

```bash
# 전체 프로젝트 검사
npx eslint .

# 특정 파일 검사
npx eslint src/components/Button.tsx
```

### 자동 수정

```bash
# 자동 수정 가능한 문제들 수정
npx eslint . --fix

# 특정 파일 자동 수정
npx eslint src/components/Button.tsx --fix
```
