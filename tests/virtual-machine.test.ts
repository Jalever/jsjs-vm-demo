import { describe, it, expect, beforeEach } from 'vitest';
import { Compiler } from '../src/compiler';
import { GlobalScope, Scope, VirtualMachine } from '../src/virtual-machine';

describe('VirtualMachine', () => {
  let compiler: Compiler;
  let globalScope: GlobalScope;
  let vm: VirtualMachine;

  beforeEach(() => {
    compiler = new Compiler();
    globalScope = new GlobalScope({});
  });

  describe('run', () => {
    it('should execute a simple arithmetic operation', () => {
      const code = 'var result = 2 + 3;';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      vm = new VirtualMachine(globalScope, bytecode);
      vm.run();
      
      expect(globalScope.load('result')).toBe(5);
    });

    it('should handle variable assignments', () => {
      const code = 'var x = 10; var y = 20; var result = x + y;';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      vm = new VirtualMachine(globalScope, bytecode);
      vm.run();
      
      expect(globalScope.load('result')).toBe(30);
      expect(globalScope.load('x')).toBe(10);
      expect(globalScope.load('y')).toBe(20);
    });

    it('should execute function calls', () => {
      const code = 'function add(a, b) { return a + b; } var result = add(5, 7);';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      vm = new VirtualMachine(globalScope, bytecode);
      vm.run();
      
      expect(globalScope.load('result')).toBe(12);
    });

    it('should handle conditional statements', () => {
      const code = 'var result; if (true) { result = "true"; } else { result = "false"; }';
      compiler.compile(code);
      const bytecode = compiler.toNumberArray();
      
      vm = new VirtualMachine(globalScope, bytecode);
      vm.run();
      
      expect(globalScope.load('result')).toBe("true");
    });
  });

  describe('Scope', () => {
    it('should declare and set variables', () => {
      const scope = new GlobalScope({});
      
      scope.var('x');
      scope.out('x', 42);
      
      expect(scope.load('x')).toBe(42);
    });

    it('should handle parent scope lookups', () => {
      const parentScope = new GlobalScope({});
      parentScope.var('y');
      parentScope.out('y', 100);
      
      const childScope = new Scope(parentScope);
      
      expect(childScope.load('y')).toBe(100);
    });
  });
}); 