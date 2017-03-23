import { Routes } from "@angular/router";
import { NoteComponent } from "./component/note";
import { LoginComponent } from "./component/login";
import { PageComponent } from "./component/page";
import { AuthGuard } from "./service";

export const ROUTES: Routes = [
    {
        path: "",
        redirectTo: "/note",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: PageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "note",
                component: NoteComponent
            }
        ]
    }
]
