export default {
  bind: (element, binding) => {
    console.log('binding:', binding);
    Object.keys(binding.value).forEach((key) => {
      element.style[key] = binding.value[key];
    })
    element.style.position = 'absolute';
  },
  update: (element, binding) => {
    console.log('binding:', binding);
    Object.keys(binding.value).forEach((key) => {
      element.style[key] = binding.value[key];
    })
    element.style.position = 'absolute';
  },
}
