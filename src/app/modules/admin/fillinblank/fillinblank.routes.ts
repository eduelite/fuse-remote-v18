import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FillinblankComponent } from './fillinblank.component';

export default [
    {
        path     : '',
        component: FillinblankComponent,
    },
] as Routes;
