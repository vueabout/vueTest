function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      // 获取当前调用 dispatch 的对象的父对象，如果不存在父组件，则取 this.$root。
      // 我觉得这样做的目的是为了当执行下面的 parent.$options.componentName; 时不至于报错，让程序可以继续往下执行。
      var parent = this.$parent || this.$root;
      // 这里的 componentName 是用户在组件中自定义的属性，如：componentName:Home，与 Home 组件同名也是可以的。
      var name = parent.$options.componentName;
      // 遍历其父组件，直到找到了传过来的组件名 name
      while (parent && (!name || name !== componentName)) {
        // 如果找不到，继续往上找
        parent = parent.$parent;
        // 再把拿到的祖先组件的 componentName 赋值给 name，再次进入 while 循环
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      // 如果找到了，那在找到的祖先组件中调用 $emit() 方法 [eventName].concat(params) 组件成的数组作为参数传递过去
      // 这里注意apply() 的用法，第二个参数为数组，apply 会把这个数组中的每一项拆散成多个参数进行传递。
      // 这里的 parent.$emit.apply(parent, [eventName].concat(params))，有两个 parent 有没有问题？答案是否定的。
      // 我把它改成这样好也是可以的，parent.$emit(eventName, ...params); ，估计这里的 applay 方法形式大于作用吧！
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 下面的这个 broadcast 方法刚好跟上面的 dispatch() 方法作用相反，但原理都是差不多的。
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
