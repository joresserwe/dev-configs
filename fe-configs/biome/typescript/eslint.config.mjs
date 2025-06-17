/**
 * Biome을 기본으로 사용하되, Biome이 대체하지 못하는 
 * 특화 Plugin(security 등)을 ESLint로 보강하는 설정
 */
import security from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';
import biomeConfig from 'eslint-config-biome';

export default tseslint.config(
  biomeConfig,
  security.configs.recommended,
  
  // =================================================================
  // 전역 설정 (규칙 최소화)
  // =================================================================
  {
    files: ['**/*.{js,ts,mjs,cjs}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Biome에 없는 타입-기반 규칙을 ESLint로 사용하려면 project 설정이 필수
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // 이 곳에는 Biome 규칙 외에, ESLint로 특별히 강제하고 싶은 규칙을 추가합니다.
      // 예: import type 사용 강제 (Biome에는 아직 없는 규칙)
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },
);
