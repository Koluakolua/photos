export function initComponent(component: any, inputs?: Record<string, unknown>) {
  if (inputs) {
    inputs && Object.entries(inputs).forEach(([key, value]) => {
      component[key] = value;
    });
    component.ngOnChanges();
  }
  component.ngOnInit();
}
