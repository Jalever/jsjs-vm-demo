import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.{test,spec}.{ts,js}'],
    exclude: ['node_modules', 'dist'],
    globals: true
  }
}); 