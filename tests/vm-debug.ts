import { Compiler } from '../src/compiler';
import { GlobalScope, VirtualMachine } from '../src/virtual-machine';

// 创建一个测试函数用于简单的执行 JS 代码并查看结果
function testVM(code: string) {
  const compiler = new Compiler();
  compiler.compile(code);
  const bytecode = compiler.toNumberArray();
  
  const globalScope = new GlobalScope({});
  const vm = new VirtualMachine(globalScope, bytecode);
  
  console.log(`Code: ${code}`);
  const result = vm.run();
  console.log(`Result: ${result}`);
  console.log('-----------------');
  
  return result;
}

// 测试几种不同的表达式
testVM('2 + 3');
testVM('var x = 10; x');
testVM('function add(a, b) { return a + b; } add(5, 10)');
testVM('var result = 42; result');
testVM('if (true) { var a = 1; } else { var a = 2; } a'); 