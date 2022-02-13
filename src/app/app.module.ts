import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { BasicsComponent } from './components/basics/basics.component';
import { ComponentsComponent } from './components/components/components.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ChildComponent } from './components/child/child.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PrintAnimalComponent } from './components/print-animal/print-animal.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { HighligtDirective } from './directive/highlight/highligt.directive';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    BasicsComponent,
    ComponentsComponent,
    AnimalsComponent,
    BindingsComponent,
    UserInputComponent,
    ChildComponent,
    InputOutputComponent,
    PrintAnimalComponent,
    DirectiveComponent,
    HighligtDirective,
    PipesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
