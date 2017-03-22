import { Routes } from "@angular/router";
import { LoginComponent } from "./component/login";

export const ROUTES: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
]
