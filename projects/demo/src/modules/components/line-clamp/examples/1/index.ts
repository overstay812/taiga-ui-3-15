import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-line-clamp-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineClampExample1 {
    value?: string;

    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}

    ngOnInit(): void {
        setTimeout(
            () => {
                this.value = `${'async fake value, '.repeat(10)}end!`;
            },
            this.isCypress ? 0 : 4000,
        );
    }
}
