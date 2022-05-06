# OnpushStrategy

What is OnPush strategy in Angular?
The OnPush strategy changes Angular's change detection behavior in a similar way as detaching a component does.
The change detection doesn't run automatically for every component anymore.
Angular instead listens for specific changes and only runs the change detection on a subtree for that component.

* detectChanges() tells Angular to run change detection on components and their children.
* markForCheck() which does not trigger change detection. Instead, it marks the component
  and all of its parents to be checked in the current or next change detection cycle.
