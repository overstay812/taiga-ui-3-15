import {ChangeDetectorRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {merge, NEVER, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiTextfieldController} from './textfield.controller';
import {
    TUI_TEXTFIELD_CLEANER,
    TuiTextfieldCleanerDirective,
} from './textfield-cleaner.directive';
import {
    TUI_TEXTFIELD_CUSTOM_CONTENT,
    TuiTextfieldCustomContentDirective,
} from './textfield-custom-content.directive';
import {
    TUI_TEXTFIELD_FILLER,
    TuiTextfieldFillerDirective,
} from './textfield-filler.directive';
import {TUI_TEXTFIELD_ICON, TuiTextfieldIconDirective} from './textfield-icon.directive';
import {
    TUI_TEXTFIELD_ICON_LEFT,
    TuiTextfieldIconLeftDirective,
} from './textfield-icon-left.directive';
import {
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TuiTextfieldLabelOutsideDirective,
} from './textfield-label-outside.directive';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptions} from './textfield-options';
import {
    TUI_TEXTFIELD_POSTFIX,
    TuiTextfieldPostfixDirective,
} from './textfield-postfix.directive';
import {
    TUI_TEXTFIELD_PREFIX,
    TuiTextfieldPrefixDirective,
} from './textfield-prefix.directive';
import {TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective} from './textfield-size.directive';

export const TUI_TEXTFIELD_WATCHED_CONTROLLER =
    new InjectionToken<TuiTextfieldController>(
        `[TUI_TEXTFIELD_WATCHED_CONTROLLER]: watched textfield controller`,
    );

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
        deps: [
            ChangeDetectorRef,
            TuiDestroyService,
            TUI_TEXTFIELD_OPTIONS,
            TUI_TEXTFIELD_CLEANER,
            TUI_TEXTFIELD_CUSTOM_CONTENT,
            TUI_TEXTFIELD_ICON,
            TUI_TEXTFIELD_ICON_LEFT,
            TUI_TEXTFIELD_LABEL_OUTSIDE,
            TUI_TEXTFIELD_SIZE,
            TUI_TEXTFIELD_PREFIX,
            TUI_TEXTFIELD_POSTFIX,
            TUI_TEXTFIELD_FILLER,
        ],
        useFactory: (
            changeDetectorRef: ChangeDetectorRef,
            destroy$: Observable<void>,
            options: TuiTextfieldOptions,
            ...controllers: [
                TuiTextfieldCleanerDirective,
                TuiTextfieldCustomContentDirective,
                TuiTextfieldIconDirective,
                TuiTextfieldIconLeftDirective,
                TuiTextfieldLabelOutsideDirective,
                TuiTextfieldSizeDirective,
                TuiTextfieldPrefixDirective,
                TuiTextfieldPostfixDirective,
                TuiTextfieldFillerDirective,
            ]
        ) => {
            const change$ = merge(
                ...controllers.map(({change$}) => change$ || NEVER),
            ).pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$));

            change$.subscribe();

            return new TuiTextfieldController(change$, options, ...controllers);
        },
    },
];
