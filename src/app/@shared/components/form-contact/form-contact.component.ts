import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ButtonComponent],

    selector: 'app-form-contact',
    templateUrl: './form-contact.component.html',
    styleUrl: './form-contact.component.scss',

    animations: [
        trigger('fadeCollapseEnterLeave', [
            transition(':enter', [style({ height: 0, opacity: 0 }), animate('150ms linear', style('*'))]),

            transition('* => void', animate('150ms linear', style({ height: 0, opacity: 0 }))),
        ]),
    ],
})
export class FormContactComponent {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.buildForm();
    }

    get emailError(): string {
        const control = this.form.controls['email'];

        if (!control.touched) return null;

        if (control.hasError('required')) return `Ce champ est obligatoire`;

        if (control.hasError('email')) return `L'adresse e-mail saisie n'est pas valide`;

        return null;
    }

    get messageError(): string {
        const control = this.form.controls['message'];

        if (!control.touched) return null;

        if (control.hasError('required')) return `Ce champ est obligatoire`;

        return null;
    }

    onSubmit(): void {
        this.form.markAllAsTouched();
    }

    //
    private buildForm(): FormGroup {
        const form = this.formBuilder.group({
            name: '',
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]],
        });

        return form;
    }
}
