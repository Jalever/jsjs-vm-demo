# 使用 Vitest 编写测试用例

本文档说明如何为 JSJS VM 项目使用 Vitest 编写测试用例。

## 设置步骤

1. 安装 Vitest 及相关依赖：

```bash
npm install -D vitest --legacy-peer-deps
```

2. 在 `package.json` 中添加测试脚本：

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

3. 创建 `vitest.config.ts` 配置文件：

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.{test,spec}.{ts,js}'],
    exclude: ['node_modules', 'dist'],
    globals: true
  }
});
```

4. 确保 `tsconfig.json` 包含测试目录：

```json
"include": [
  "src/**/*.ts",
  "tests/**/*.ts"
]
```

## 创建测试用例

### 测试文件结构

测试文件应位于 `tests` 目录中，并以 `.test.ts` 或 `.spec.ts` 结尾。

### 基本测试结构

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentToTest } from '../src/component';

describe('ComponentName', () => {
  let componentInstance;

  beforeEach(() => {
    componentInstance = new ComponentToTest();
  });

  describe('methodName', () => {
    it('should do something specific', () => {
      // 准备测试数据
      const input = 'test';
      
      // 执行被测方法
      const result = componentInstance.method(input);
      
      // 断言结果
      expect(result).toBe(expectedOutput);
    });
  });
});
```

## 测试项目的主要组件

### 编译器 (Compiler)

```typescript
// tests/compiler.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { Compiler } from '../src/compiler';

describe('Compiler', () => {
  let compiler: Compiler;

  beforeEach(() => {
    compiler = new Compiler();
  });

  it('should compile a simple variable declaration', () => {
    const code = 'var a = 10;';
    compiler.compile(code);
    const bytecode = compiler.toNumberArray();
    
    expect(bytecode.length).toBeGreaterThan(0);
  });
  
  // 更多测试...
});
```

### 虚拟机 (VirtualMachine)

```typescript
// tests/virtual-machine.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { Compiler } from '../src/compiler';
import { GlobalScope, VirtualMachine } from '../src/virtual-machine';

describe('VirtualMachine', () => {
  let compiler: Compiler;
  let globalScope: GlobalScope;
  let vm: VirtualMachine;

  beforeEach(() => {
    compiler = new Compiler();
    globalScope = new GlobalScope({});
  });

  it('should execute a simple arithmetic operation', () => {
    const code = 'var result = 2 + 3;';
    compiler.compile(code);
    const bytecode = compiler.toNumberArray();
    
    vm = new VirtualMachine(globalScope, bytecode);
    vm.run();
    
    expect(globalScope.load('result')).toBe(5);
  });
  
  // 更多测试...
});
```

### 解析器 (Parser)

```typescript
// tests/parser.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { Parser } from '../src/parser';
import { UniqueId } from '../src/compiler';

describe('Parser', () => {
  let parser: Parser;
  let uniqueId: UniqueId;

  beforeEach(() => {
    uniqueId = new UniqueId();
    parser = new Parser(uniqueId);
  });

  it('should parse simple variable declarations', () => {
    const code = 'var a = 10;';
    const blocks = parser.parse(code);
    
    expect(blocks.length).toBe(1);
    expect(blocks[0].type).toBe('Program');
    expect(blocks[0].declarations.has('a')).toBe(true);
  });
  
  // 更多测试...
});
```

## 运行测试

运行所有测试：

```bash
npm test
```

监视模式（实时重新运行测试）：

```bash
npm run test:watch
```

生成测试覆盖率报告：

```bash
npm run test:coverage
```

## 测试注意事项

1. **JSJS VM 的返回值行为**：虚拟机在执行代码时，表达式语句的结果会被丢弃（POP 操作），因此 `vm.run()` 通常返回 `undefined`。测试时应该直接检查变量的值而不是依赖返回值。

2. **全局作用域**：若要验证代码执行的结果，应通过 `globalScope.load('varName')` 获取。

3. **正确的测试格式**：确保使用正确的导入和 describe/it 格式，遵循 Vitest 的最佳实践。

4. **隔离的测试**：每个测试应该是独立的，使用 `beforeEach` 重置测试环境。 