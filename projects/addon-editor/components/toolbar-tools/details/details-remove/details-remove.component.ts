import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-details-remove',
    templateUrl: './details-remove.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemoveComponent {
    readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('details')),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    removeDetails(): void {
        this.editor.removeDetails();
    }
}
