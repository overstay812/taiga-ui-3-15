/* eslint-disable rxjs/no-topromise */
import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, `../../../migration.json`);

const BEFORE = `
import {controlPoint, describeSector, drawCurve, drawLine, draw, lineAngle} from '@taiga-ui/addon-charts';
import {
  formatCurrency,
  getCurrencySymbol,
  getPaymentSystem,
  isMaestro,
  isMastercard,
  isMir,
  isElectron,
  isVisa,
  isCardLengthValid,
  isCardNumberValid,
  isExpireValid,
} from '@taiga-ui/addon-commerce';
import {
  tryParseMarkdownCodeBlock,
  coerceValue,
  rgbToHex,
  hexToRgb,
  generateRoutes,
  inspectAny,
  rawLoadRecord,
  transliterateKeyboardLayout,
} from '@taiga-ui/addon-doc';
import {
  isEmptyParagraph,
  getElementPoint,
  getGradientData,
  getMarkRange,
  hexToRgb,
  hsvToRgb,
  isSelectionIn,
  parseColor,
  parseGradient,
  rgbToHex,
  rgbToHsv,
  toGradient,
} from '@taiga-ui/addon-editor';
import {defaultSort} from '@taiga-ui/addon-table';
import {
  mockCurrentDate,
  restoreRealDate,
  mockDateInside,
  pendingIfNotMoscowTimeZone,
  dragAndDropFrom,
  focusVisibleObservable,
  itemsQueryListObservable,
  mouseDragFinishFrom,
  mustBePresent,
  pressedObservable,
  preventDefault,
  stopPropagation,
  typedFromEvent,
  watch,
  isEdgeOlderThan,
  isEdge,
  isFirefox,
  isIE,
  isSafari,
  canScroll,
  containsOrAfter,
  getActualTarget,
  getClipboardDataText,
  getDocumentOrShadowRoot,
  getElementObscurers,
  getElementOffset,
  getScrollParent,
  isCurrentTarget,
  isInsideIframe,
  isNodeIn,
  blurNativeFocused,
  getClosestKeyboardFocusable,
  getNativeFocused,
  isNativeFocusedIn,
  isNativeFocused,
  isNativeKeyboardFocusable,
  isNativeMouseFocusable,
  moveFocus,
  setNativeFocused,
  setNativeMouseFocused,
  px,
  clamp,
  inRange,
  normalizeToIntNumber,
  quantize,
  round,
  ceil,
  floor,
  sum,
  toInt,
  toRadians,
  distanceBetweenTouches,
  easeInOutQuad,
  flatLength,
  getOriginalArrayFromQueryList,
  getSwipeDirection,
  isElementEditable,
  isNumber,
  isPresent,
  markControlAsTouchedAndValidate,
  nullableSame,
  uniqBy,
  isApplePlatform,
  isApple,
  isIos,
  svgLinearGradientProcessor,
} from '@taiga-ui/cdk';
import {
  textfieldWatchedControllerFactory,
  smartSearch,
  isMobileResFactory,
  modeFactory,
  watchedControllerFactory,
  areCssVarsSupported,
  checkFixedPosition,
  getSafeAreaSize,
  getScreenWidth,
  processIcon,
  capitalizeFirstLetter,
  capitalize,
  formatNumber,
  formatPhone,
  getFractionPartPadded,
  numberToStringWithoutExp,
  otherDecimalSymbol,
  pluralize,
  maskedMoneyValueIsEmpty,
  maskedNumberStringToNumber,
  getBorder,
  iconsPathFactory,
  isEditingKey,
  isPresumedHTMLString,
  sizeBigger,
} from '@taiga-ui/core';
import {extractI18n} from '@taiga-ui/i18n';
import {
  extractValueFromEvent,
  getWordRange,
  scrollToElement,
  setRangeOffset,
  formatSize,
  getAcceptArray,
  stringHashToHsl,
  normalizeDateValue,
  getPrecision,
  isFlat,
} from '@taiga-ui/kit';

const args: any[] = [];

controlPoint(...args);
describeSector(...args);
drawCurve(...args);
drawLine(...args);
draw(...args);
lineAngle(...args);
formatCurrency(...args);
getCurrencySymbol(...args);
getPaymentSystem(...args);
isMaestro(...args);
isMastercard(...args);
isMir(...args);
isElectron(...args);
isVisa(...args);
isCardLengthValid(...args);
isCardNumberValid(...args);
isExpireValid(...args);
tryParseMarkdownCodeBlock(...args);
coerceValue(...args);
rgbToHex(...args);
hexToRgb(...args);
generateRoutes(...args);
inspectAny(...args);
rawLoadRecord(...args);
transliterateKeyboardLayout(...args);
isEmptyParagraph(...args);
getElementPoint(...args);
getGradientData(...args);
getMarkRange(...args);
hexToRgb(...args);
hsvToRgb(...args);
isSelectionIn(...args);
parseColor(...args);
parseGradient(...args);
rgbToHex(...args);
rgbToHsv(...args);
toGradient(...args);
defaultSort(...args);
mockCurrentDate(...args);
restoreRealDate(...args);
mockDateInside(...args);
pendingIfNotMoscowTimeZone(...args);
dragAndDropFrom(...args);
focusVisibleObservable(...args);
itemsQueryListObservable(...args);
mouseDragFinishFrom(...args);
mustBePresent(...args);
pressedObservable(...args);
preventDefault(...args);
stopPropagation(...args);
typedFromEvent(...args);
watch(...args);
isEdgeOlderThan(...args);
isEdge(...args);
isFirefox(...args);
isSafari(...args);
canScroll(...args);
containsOrAfter(...args);
getActualTarget(...args);
getClipboardDataText(...args);
getDocumentOrShadowRoot(...args);
getElementObscurers(...args);
getElementOffset(...args);
getScrollParent(...args);
isCurrentTarget(...args);
isInsideIframe(...args);
isNodeIn(...args);
blurNativeFocused(...args);
getClosestKeyboardFocusable(...args);
getNativeFocused(...args);
isNativeFocusedIn(...args);
isNativeFocused(...args);
isNativeKeyboardFocusable(...args);
isNativeMouseFocusable(...args);
moveFocus(...args);
setNativeFocused(...args);
setNativeMouseFocused(...args);
px(...args);
clamp(...args);
inRange(...args);
normalizeToIntNumber(...args);
quantize(...args);
round(...args);
ceil(...args);
floor(...args);
sum(...args);
toInt(...args);
toRadians(...args);
distanceBetweenTouches(...args);
easeInOutQuad(...args);
flatLength(...args);
getOriginalArrayFromQueryList(...args);
getSwipeDirection(...args);
isElementEditable(...args);
isNumber(...args);
isPresent(...args);
markControlAsTouchedAndValidate(...args);
nullableSame(...args);
uniqBy(...args);
isApplePlatform(...args);
isApple(...args);
isIos(...args);
svgLinearGradientProcessor(...args);
textfieldWatchedControllerFactory(...args);
smartSearch(...args);
isMobileResFactory(...args);
modeFactory(...args);
watchedControllerFactory(...args);
areCssVarsSupported(...args);
checkFixedPosition(...args);
getSafeAreaSize(...args);
getScreenWidth(...args);
processIcon(...args);
capitalizeFirstLetter(...args);
capitalize(...args);
formatNumber(...args);
formatPhone(...args);
getFractionPartPadded(...args);
numberToStringWithoutExp(...args);
otherDecimalSymbol(...args);
pluralize(...args);
maskedMoneyValueIsEmpty(...args);
maskedNumberStringToNumber(...args);
getBorder(...args);
iconsPathFactory(...args);
isEditingKey(...args);
isPresumedHTMLString(...args);
sizeBigger(...args);
extractI18n(...args);
extractValueFromEvent(...args);
getWordRange(...args);
scrollToElement(...args);
setRangeOffset(...args);
formatSize(...args);
getAcceptArray(...args);
stringHashToHsl(...args);
normalizeDateValue(...args);
getPrecision(...args);
isFlat(...args);

class Component {
  ngOnInit() {
    controlPoint();
    describeSector();
    drawCurve();
    drawLine();
    draw();
    lineAngle();
    formatCurrency();
    getCurrencySymbol();
    getPaymentSystem();
    isMaestro();
    isMastercard();
    isMir();
    isElectron();
    isVisa();
    isCardLengthValid();
    isCardNumberValid();
    isExpireValid();
    tryParseMarkdownCodeBlock();
    coerceValue();
    rgbToHex();
    hexToRgb();
    generateRoutes();
    inspectAny();
    rawLoadRecord();
    transliterateKeyboardLayout();
    isEmptyParagraph();
    getElementPoint();
    getGradientData();
    getMarkRange();
    hexToRgb();
    hsvToRgb();
    isSelectionIn();
    parseColor();
    parseGradient();
    rgbToHex();
    rgbToHsv();
    toGradient();
    defaultSort();
    mockCurrentDate();
    restoreRealDate();
    mockDateInside();
    pendingIfNotMoscowTimeZone();
    dragAndDropFrom();
    focusVisibleObservable();
    itemsQueryListObservable();
    mouseDragFinishFrom();
    mustBePresent();
    pressedObservable();
    preventDefault();
    stopPropagation();
    typedFromEvent();
    watch();
    isEdgeOlderThan();
    isEdge();
    isFirefox();
    isIE();
    isSafari();
    canScroll();
    containsOrAfter();
    getActualTarget();
    getClipboardDataText();
    getDocumentOrShadowRoot();
    getElementObscurers();
    getElementOffset();
    getScrollParent();
    isCurrentTarget();
    isInsideIframe();
    isNodeIn();
    blurNativeFocused();
    getClosestKeyboardFocusable();
    getNativeFocused();
    isNativeFocusedIn();
    isNativeFocused();
    isNativeKeyboardFocusable();
    isNativeMouseFocusable();
    moveFocus();
    setNativeFocused();
    setNativeMouseFocused();
    px();
    clamp();
    inRange();
    normalizeToIntNumber();
    quantize();
    round();
    ceil();
    floor();
    sum();
    toInt();
    toRadians();
    distanceBetweenTouches();
    easeInOutQuad();
    flatLength();
    getOriginalArrayFromQueryList();
    getSwipeDirection();
    isElementEditable();
    isNumber();
    isPresent();
    markControlAsTouchedAndValidate();
    nullableSame();
    uniqBy();
    isApplePlatform();
    isApple();
    isIos();
    svgLinearGradientProcessor();
    textfieldWatchedControllerFactory();
    smartSearch();
    isMobileResFactory();
    modeFactory();
    watchedControllerFactory();
    areCssVarsSupported();
    checkFixedPosition();
    getSafeAreaSize();
    getScreenWidth();
    processIcon();
    capitalizeFirstLetter();
    capitalize();
    formatNumber();
    formatPhone();
    getFractionPartPadded();
    numberToStringWithoutExp();
    otherDecimalSymbol();
    pluralize();
    maskedMoneyValueIsEmpty();
    maskedNumberStringToNumber();
    getBorder();
    iconsPathFactory();
    isEditingKey();
    isPresumedHTMLString();
    sizeBigger();
    extractI18n();
    extractValueFromEvent();
    getWordRange();
    scrollToElement();
    setRangeOffset();
    formatSize();
    getAcceptArray();
    stringHashToHsl();
    normalizeDateValue();
    getPrecision();
    isFlat();
  }
}

// Even simple comment can cause schematics error :)
typedFromEvent(nativeElement, 'dragover').subscribe();
`;

const AFTER = `
import {tuiControlPoint, tuiDescribeSector, tuiDrawCurve, tuiDrawLine, tuiDraw, tuiLineAngle} from '@taiga-ui/addon-charts';
import {
  tuiFormatCurrency,
  tuiGetCurrencySymbol,
  tuiGetPaymentSystem,
  tuiIsMaestro,
  tuiIsMastercard,
  tuiIsMir,
  tuiIsElectron,
  tuiIsVisa,
  tuiIsCardLengthValid,
  tuiIsCardNumberValid,
  tuiIsExpireValid,
} from '@taiga-ui/addon-commerce';
import {
  tuiTryParseMarkdownCodeBlock,
  tuiCoerceValue,
  tuiGenerateRoutes,
  tuiInspectAny,
  tuiRawLoadRecord,
  tuiTransliterateKeyboardLayout,
} from '@taiga-ui/addon-doc';
import {
  tuiIsEmptyParagraph,
  tuiGetElementPoint,
  tuiGetGradientData,
  tuiGetMarkRange,
  tuiIsSelectionIn,
  tuiParseGradient,
  tuiToGradient,
} from '@taiga-ui/addon-editor';
import {tuiDefaultSort} from '@taiga-ui/addon-table';
import { tuiMockCurrentDate, tuiRestoreRealDate, tuiMockDateInside, tuiPendingIfNotMoscowTimeZone, tuiDragAndDropFrom, tuiFocusVisibleObservable, tuiQueryListChanges, tuiMouseDragFinishFrom, tuiMustBePresent, tuiPressedObservable, tuiPreventDefault, tuiStopPropagation, tuiTypedFromEvent, tuiWatch, tuiIsEdgeOlderThan, tuiIsEdge, tuiIsFirefox, tuiIsIE, tuiIsSafari, tuiCanScroll, tuiContainsOrAfter, tuiGetActualTarget, tuiGetClipboardDataText, tuiGetDocumentOrShadowRoot, tuiGetElementObscures, tuiGetElementOffset, tuiGetScrollParent, tuiIsCurrentTarget, tuiIsInsideIframe, tuiIsNodeIn, tuiBlurNativeFocused, tuiGetNativeFocused, tuiIsNativeFocusedIn, tuiIsNativeFocused, tuiIsNativeKeyboardFocusable, tuiIsNativeMouseFocusable, tuiMoveFocus, tuiSetNativeFocused, tuiSetNativeMouseFocused, tuiPx, tuiClamp, tuiInRange, tuiNormalizeToIntNumber, tuiQuantize, tuiRound, tuiCeil, tuiFloor, tuiSum, tuiToInt, tuiToRadians, tuiDistanceBetweenTouches, tuiEaseInOutQuad, tuiFlatLength, tuiGetOriginalArrayFromQueryList, tuiGetSwipeDirection, tuiIsElementEditable, tuiIsNumber, tuiIsPresent, tuiMarkControlAsTouchedAndValidate, tuiNullableSame, tuiUniqBy, tuiIsApplePlatform, tuiIsApple, tuiIsIos, tuiSvgLinearGradientProcessor, tuiGetClosestFocusable, tuiHexToRgb, tuiHsvToRgb, tuiParseColor, tuiRgbToHex, tuiRgbToHsv } from '@taiga-ui/cdk';
import {
  tuiTextfieldWatchedControllerFactory,
  tuiSmartSearch,
  tuiIsMobileResFactory,
  tuiModeFactory,
  tuiWatchedControllerFactory,
  tuiAreCssVarsSupported,
  tuiCheckFixedPosition,
  tuiGetSafeAreaSize,
  tuiGetScreenWidth,
  tuiProcessIcon,
  tuiCapitalizeFirstLetter,
  tuiCapitalize,
  tuiFormatNumber,
  tuiFormatPhone,
  tuiGetFractionPartPadded,
  tuiNumberToStringWithoutExp,
  tuiOtherDecimalSymbol,
  tuiPluralize,
  tuiMaskedMoneyValueIsEmpty,
  tuiMaskedNumberStringToNumber,
  tuiGetBorder,
  tuiIconsPathFactory,
  tuiIsEditingKey,
  tuiIsPresumedHTMLString,
  tuiSizeBigger,
} from '@taiga-ui/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';
import {
  tuiExtractValueFromEvent,
  tuiGetWordRange,
  tuiScrollToElement,
  tuiSetRangeOffset,
  tuiFormatSize,
  tuiGetAcceptArray,
  tuiStringHashToHsl,
  tuiNormalizeDateValue,
  tuiGetPrecision,
  tuiIsFlat,
} from '@taiga-ui/kit';

const args: any[] = [];

tuiControlPoint(...args);
tuiDescribeSector(...args);
tuiDrawCurve(...args);
tuiDrawLine(...args);
tuiDraw(...args);
tuiLineAngle(...args);
tuiFormatCurrency(...args);
tuiGetCurrencySymbol(...args);
tuiGetPaymentSystem(...args);
tuiIsMaestro(...args);
tuiIsMastercard(...args);
tuiIsMir(...args);
tuiIsElectron(...args);
tuiIsVisa(...args);
tuiIsCardLengthValid(...args);
tuiIsCardNumberValid(...args);
tuiIsExpireValid(...args);
tuiTryParseMarkdownCodeBlock(...args);
tuiCoerceValue(...args);
tuiRgbToHex(...args);
tuiHexToRgb(...args);
tuiGenerateRoutes(...args);
tuiInspectAny(...args);
tuiRawLoadRecord(...args);
tuiTransliterateKeyboardLayout(...args);
tuiIsEmptyParagraph(...args);
tuiGetElementPoint(...args);
tuiGetGradientData(...args);
tuiGetMarkRange(...args);
tuiHexToRgb(...args);
tuiHsvToRgb(...args);
tuiIsSelectionIn(...args);
tuiParseColor(...args);
tuiParseGradient(...args);
tuiRgbToHex(...args);
tuiRgbToHsv(...args);
tuiToGradient(...args);
tuiDefaultSort(...args);
tuiMockCurrentDate(...args);
tuiRestoreRealDate(...args);
tuiMockDateInside(...args);
tuiPendingIfNotMoscowTimeZone(...args);
tuiDragAndDropFrom(...args);
tuiFocusVisibleObservable(...args);
tuiQueryListChanges(...args);
tuiMouseDragFinishFrom(...args);
tuiMustBePresent(...args);
tuiPressedObservable(...args);
tuiPreventDefault(...args);
tuiStopPropagation(...args);
tuiTypedFromEvent(...args);
tuiWatch(...args);
tuiIsEdgeOlderThan(...args);
tuiIsEdge(...args);
tuiIsFirefox(...args);
tuiIsSafari(...args);
tuiCanScroll(...args);
tuiContainsOrAfter(...args);
tuiGetActualTarget(...args);
tuiGetClipboardDataText(...args);
tuiGetDocumentOrShadowRoot(...args);
tuiGetElementObscures(...args);
tuiGetElementOffset(...args);
tuiGetScrollParent(...args);
tuiIsCurrentTarget(...args);
tuiIsInsideIframe(...args);
tuiIsNodeIn(...args);
tuiBlurNativeFocused(...args);
tuiGetClosestFocusable(...args);
tuiGetNativeFocused(...args);
tuiIsNativeFocusedIn(...args);
tuiIsNativeFocused(...args);
tuiIsNativeKeyboardFocusable(...args);
tuiIsNativeMouseFocusable(...args);
tuiMoveFocus(...args);
tuiSetNativeFocused(...args);
tuiSetNativeMouseFocused(...args);
tuiPx(...args);
tuiClamp(...args);
tuiInRange(...args);
tuiNormalizeToIntNumber(...args);
tuiQuantize(...args);
tuiRound(...args);
tuiCeil(...args);
tuiFloor(...args);
tuiSum(...args);
tuiToInt(...args);
tuiToRadians(...args);
tuiDistanceBetweenTouches(...args);
tuiEaseInOutQuad(...args);
tuiFlatLength(...args);
tuiGetOriginalArrayFromQueryList(...args);
tuiGetSwipeDirection(...args);
tuiIsElementEditable(...args);
tuiIsNumber(...args);
tuiIsPresent(...args);
tuiMarkControlAsTouchedAndValidate(...args);
tuiNullableSame(...args);
tuiUniqBy(...args);
tuiIsApplePlatform(...args);
tuiIsApple(...args);
tuiIsIos(...args);
tuiSvgLinearGradientProcessor(...args);
tuiTextfieldWatchedControllerFactory(...args);
tuiSmartSearch(...args);
tuiIsMobileResFactory(...args);
tuiModeFactory(...args);
tuiWatchedControllerFactory(...args);
tuiAreCssVarsSupported(...args);
tuiCheckFixedPosition(...args);
tuiGetSafeAreaSize(...args);
tuiGetScreenWidth(...args);
tuiProcessIcon(...args);
tuiCapitalizeFirstLetter(...args);
tuiCapitalize(...args);
tuiFormatNumber(...args);
tuiFormatPhone(...args);
tuiGetFractionPartPadded(...args);
tuiNumberToStringWithoutExp(...args);
tuiOtherDecimalSymbol(...args);
tuiPluralize(...args);
tuiMaskedMoneyValueIsEmpty(...args);
tuiMaskedNumberStringToNumber(...args);
tuiGetBorder(...args);
tuiIconsPathFactory(...args);
tuiIsEditingKey(...args);
tuiIsPresumedHTMLString(...args);
tuiSizeBigger(...args);
tuiExtractI18n(...args);
tuiExtractValueFromEvent(...args);
tuiGetWordRange(...args);
tuiScrollToElement(...args);
tuiSetRangeOffset(...args);
tuiFormatSize(...args);
tuiGetAcceptArray(...args);
tuiStringHashToHsl(...args);
tuiNormalizeDateValue(...args);
tuiGetPrecision(...args);
tuiIsFlat(...args);

class Component {
  ngOnInit() {
    tuiControlPoint();
    tuiDescribeSector();
    tuiDrawCurve();
    tuiDrawLine();
    tuiDraw();
    tuiLineAngle();
    tuiFormatCurrency();
    tuiGetCurrencySymbol();
    tuiGetPaymentSystem();
    tuiIsMaestro();
    tuiIsMastercard();
    tuiIsMir();
    tuiIsElectron();
    tuiIsVisa();
    tuiIsCardLengthValid();
    tuiIsCardNumberValid();
    tuiIsExpireValid();
    tuiTryParseMarkdownCodeBlock();
    tuiCoerceValue();
    tuiRgbToHex();
    tuiHexToRgb();
    tuiGenerateRoutes();
    tuiInspectAny();
    tuiRawLoadRecord();
    tuiTransliterateKeyboardLayout();
    tuiIsEmptyParagraph();
    tuiGetElementPoint();
    tuiGetGradientData();
    tuiGetMarkRange();
    tuiHexToRgb();
    tuiHsvToRgb();
    tuiIsSelectionIn();
    tuiParseColor();
    tuiParseGradient();
    tuiRgbToHex();
    tuiRgbToHsv();
    tuiToGradient();
    tuiDefaultSort();
    tuiMockCurrentDate();
    tuiRestoreRealDate();
    tuiMockDateInside();
    tuiPendingIfNotMoscowTimeZone();
    tuiDragAndDropFrom();
    tuiFocusVisibleObservable();
    tuiQueryListChanges();
    tuiMouseDragFinishFrom();
    tuiMustBePresent();
    tuiPressedObservable();
    tuiPreventDefault();
    tuiStopPropagation();
    tuiTypedFromEvent();
    tuiWatch();
    tuiIsEdgeOlderThan();
    tuiIsEdge();
    tuiIsFirefox();
    tuiIsIE();
    tuiIsSafari();
    tuiCanScroll();
    tuiContainsOrAfter();
    tuiGetActualTarget();
    tuiGetClipboardDataText();
    tuiGetDocumentOrShadowRoot();
    tuiGetElementObscures();
    tuiGetElementOffset();
    tuiGetScrollParent();
    tuiIsCurrentTarget();
    tuiIsInsideIframe();
    tuiIsNodeIn();
    tuiBlurNativeFocused();
    tuiGetClosestFocusable();
    tuiGetNativeFocused();
    tuiIsNativeFocusedIn();
    tuiIsNativeFocused();
    tuiIsNativeKeyboardFocusable();
    tuiIsNativeMouseFocusable();
    tuiMoveFocus();
    tuiSetNativeFocused();
    tuiSetNativeMouseFocused();
    tuiPx();
    tuiClamp();
    tuiInRange();
    tuiNormalizeToIntNumber();
    tuiQuantize();
    tuiRound();
    tuiCeil();
    tuiFloor();
    tuiSum();
    tuiToInt();
    tuiToRadians();
    tuiDistanceBetweenTouches();
    tuiEaseInOutQuad();
    tuiFlatLength();
    tuiGetOriginalArrayFromQueryList();
    tuiGetSwipeDirection();
    tuiIsElementEditable();
    tuiIsNumber();
    tuiIsPresent();
    tuiMarkControlAsTouchedAndValidate();
    tuiNullableSame();
    tuiUniqBy();
    tuiIsApplePlatform();
    tuiIsApple();
    tuiIsIos();
    tuiSvgLinearGradientProcessor();
    tuiTextfieldWatchedControllerFactory();
    tuiSmartSearch();
    tuiIsMobileResFactory();
    tuiModeFactory();
    tuiWatchedControllerFactory();
    tuiAreCssVarsSupported();
    tuiCheckFixedPosition();
    tuiGetSafeAreaSize();
    tuiGetScreenWidth();
    tuiProcessIcon();
    tuiCapitalizeFirstLetter();
    tuiCapitalize();
    tuiFormatNumber();
    tuiFormatPhone();
    tuiGetFractionPartPadded();
    tuiNumberToStringWithoutExp();
    tuiOtherDecimalSymbol();
    tuiPluralize();
    tuiMaskedMoneyValueIsEmpty();
    tuiMaskedNumberStringToNumber();
    tuiGetBorder();
    tuiIconsPathFactory();
    tuiIsEditingKey();
    tuiIsPresumedHTMLString();
    tuiSizeBigger();
    tuiExtractI18n();
    tuiExtractValueFromEvent();
    tuiGetWordRange();
    tuiScrollToElement();
    tuiSetRangeOffset();
    tuiFormatSize();
    tuiGetAcceptArray();
    tuiStringHashToHsl();
    tuiNormalizeDateValue();
    tuiGetPrecision();
    tuiIsFlat();
  }
}

// Even simple comment can cause schematics error :)
tuiTypedFromEvent(nativeElement, 'dragover').subscribe();
`;

describe(`replace functions`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it(`should replace functions`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/app.component.ts`)).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(`test/app/app.component.ts`, BEFORE);

    createSourceFile(`test/app/app.template.html`, `<app></app>`);

    createAngularJson();
    createSourceFile(`package.json`, `{"dependencies": {"@angular/core": "~13.0.0"}}`);
}
