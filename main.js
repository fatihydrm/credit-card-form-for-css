cw.oninput = function () {
  if (this.value.length > 3)
      this.value = this.value.slice(0,3); 
}