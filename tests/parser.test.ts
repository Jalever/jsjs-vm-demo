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

  describe('parse', () => {
    it('should parse simple variable declarations', () => {
      const code = 'var a = 10;';
      const blocks = parser.parse(code);
      
      expect(blocks.length).toBe(1);
      expect(blocks[0].type).toBe('Program');
      expect(blocks[0].declarations.has('a')).toBe(true);
    });

    it('should parse function declarations', () => {
      const code = 'function add(a, b) { return a + b; }';
      const blocks = parser.parse(code);
      
      expect(blocks.length).toBe(2);
      expect(blocks[0].type).toBe('Program');
      expect(blocks[1].type).toBe('FunctionDeclaration');
      expect(blocks[0].declarations.has('add')).toBe(true);
    });

    it('should parse function expressions', () => {
      const code = 'var multiply = function(a, b) { return a * b; };';
      const blocks = parser.parse(code);
      
      expect(blocks.length).toBe(2);
      expect(blocks[0].type).toBe('Program');
      expect(blocks[1].type).toBe('FunctionExpression');
      expect(blocks[0].declarations.has('multiply')).toBe(true);
    });

    it('should handle nested scopes correctly', () => {
      const code = `
        var x = 10;
        function outer() {
          var y = 20;
          function inner() {
            var z = 30;
            return x + y + z;
          }
          return inner();
        }
      `;
      const blocks = parser.parse(code);
      
      expect(blocks.length).toBe(3);
      expect(blocks[0].type).toBe('Program');
      expect(blocks[0].declarations.has('x')).toBe(true);
      expect(blocks[0].declarations.has('outer')).toBe(true);
      
      const outerFunction = blocks.find(b => b.type === 'FunctionDeclaration' && b['id']?.name === 'outer');
      expect(outerFunction).toBeDefined();
      expect(outerFunction?.declarations.has('y')).toBe(true);
      expect(outerFunction?.declarations.has('inner')).toBe(true);
      
      const innerFunction = blocks.find(b => b.type === 'FunctionDeclaration' && b['id']?.name === 'inner');
      expect(innerFunction).toBeDefined();
      expect(innerFunction?.declarations.has('z')).toBe(true);
    });
  });
}); 