import { describe, it, expect, beforeEach } from 'vitest';
import { Compiler } from '../src/compiler';

describe('Compiler', () => {
  let compiler: Compiler;

  beforeEach(() => {
    compiler = new Compiler();
  });

  describe('compile', () => {
    it('should compile a simple variable declaration', () => {
      const code = 'var a = 10;';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      // 验证字节码数组不为空
      expect(bytecode.length).toBeGreaterThan(0);
    });

    it('should compile a simple function declaration', () => {
      const code = 'function add(a, b) { return a + b; }';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      expect(bytecode.length).toBeGreaterThan(0);
    });

    it('should compile an if statement', () => {
      const code = 'if (true) { var x = 1; } else { var x = 2; }';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      expect(bytecode.length).toBeGreaterThan(0);
    });

    it('should compile a loop statement', () => {
      const code = 'for (var i = 0; i < 10; i++) { console.log(i); }';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      expect(bytecode.length).toBeGreaterThan(0);
    });
  });

  describe('toNumberArray', () => {
    it('should convert compiled code to a number array', () => {
      const code = 'var x = 42;';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      expect(Array.isArray(bytecode)).toBe(true);
      expect(bytecode.every(num => typeof num === 'number')).toBe(true);
    });
  });
}); 