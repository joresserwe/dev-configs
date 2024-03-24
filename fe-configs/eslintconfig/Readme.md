## ESLint 설정

```bash
npm install -D eslint\
               eslint-plugin-react\
               eslint-plugin-react-hooks\
               eslint-plugin-import\
               eslint-plugin-prettier\
               eslint-config-prettier\
               eslint-plugin-simple-import-sort\
               @typescript-eslint/eslint-plugin\
               @typescript-eslint/parser\ # ts에서만 사용
               # eslint-plugin-jsx-a11y
               # @emotion/eslint-plugin
```

- `eslint`: ESLint 코어 라이브러리
- `eslint-plugin-react`: React 관련 ESLint 규칙
- `eslint-plugin-react-hooks`: React Hooks 관련 ESLint 규칙
- `eslint-plugin-import`: import/export 문 관련 ESLint 규칙
- `eslint-plugin-prettier`: Prettier와 ESLint 통합
- `eslint-config-prettier`: Prettier와 충돌을 방지하는 ESLint 규칙 
- `eslint-plugin-simple-import-sort`: import 문 자동 정렬을 위한 ESLint 플러그인
- `eslint-plugin-jsx-a11y`: JSX 접근성 관련 ESLint 규칙
- `@emotion/eslint-plugin`: Emotion CSS-in-JS 라이브러리 관련 ESLint 규칙
- `@typescript-eslint/eslint-plugin`TypeScript 지원을 위한 ESLint 플러그인
- `@typescript-eslint/parser`: TypeScript 지원을 위한 ESLint 파서

### Formmatting
```bash
# check
npx eslint {}.js
# formatting
npx eslint {}.js --fix
```
