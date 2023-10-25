/**
 * Interface for components that represent an avatar and may be slotted in numerous higher-order components such as <code>ui5-avatar-group</code>
 *
 * @name sap.ui.webc.main.IAvatar
 * @interface
 * @public
 */
const IAvatar = "sap.ui.webc.main.IAvatar";

/**
 * Interface for components that may be slotted inside <code>ui5-breadcrumbs</code> as options
 *
 * @name sap.ui.webc.main.IBreadcrumbsItem
 * @interface
 * @public
 */
const IBreadcrumbsItem = "sap.ui.webc.main.IBreadcrumbsItem";

/**
 * Interface for components that may be used as a button inside numerous higher-order components
 *
 * @name sap.ui.webc.main.IButton
 * @interface
 * @public
 */
const IButton = "sap.ui.webc.main.IButton";

/**
 * Interface for components that may be slotted inside <code>ui5-card</code> as header
 *
 * @name sap.ui.webc.main.ICardHeader
 * @interface
 * @public
 */
const ICardHeader = "sap.ui.webc.main.ICardHeader";

/**
 * Interface for components that may be used as dates inside <code>ui5-calendar</code>
 *
 * @name sap.ui.webc.main.ICalendarDate
 * @interface
 * @public
 */
const ICalendarDate = "sap.ui.webc.main.ICalendarDate";

/**
 * Interface for components that may be slotted inside a <code>ui5-combobox</code>
 *
 * @name sap.ui.webc.main.IComboBoxItem
 * @interface
 * @public
 */
const IComboBoxItem = "sap.ui.webc.main.IComboBoxItem";

/**
 * Interface for components that may be used inside a <code>ui5-color-palette</code> or <code>ui5-color-palette-popover</code>
 *
 * @name sap.ui.webc.main.IColorPaletteItem
 * @interface
 * @public
 */
const IColorPaletteItem = "sap.ui.webc.main.IColorPaletteItem";

/**
 * Interface for components that represent an icon, usable in numerous higher-order components
 *
 * @public
 */
interface IIcon {
	isUI5Element: boolean;
}

/**
 * Interface for components that represent an input, usable in numerous higher-order components
 *
 * @public
 */
interface IInput {
	isUI5Element: boolean;
}

/**
 * Interface for components that represent a suggestion item, usable in <code>ui5-input</code>
 *
 * @public
 */
interface IInputSuggestionItem extends HTMLElement {
	text: string,
	groupItem: boolean,
}

/**
 * Interface for components that may be slotted inside a <code>ui5-list</code> as items
 *
 * @name sap.ui.webc.main.IListItem
 * @interface
 * @public
 */
const IListItem = "sap.ui.webc.main.IListItem";

/**
 * Interface for components that may be slotted inside <code>ui5-menu</code> as items
 *
 * @name sap.ui.webc.main.IMenuItem
 * @interface
 * @public
 */
const IMenuItem = "sap.ui.webc.main.IMenuItem";

/**
 * Interface for components that may be slotted inside a <code>ui5-multi-combobox</code> as items
 *
 * @name sap.ui.webc.main.IMultiComboBoxItem
 * @interface
 * @public
 */
const IMultiComboBoxItem = "sap.ui.webc.main.IMultiComboBoxItem";

/**
 * Interface for components that may be slotted inside <code>ui5-segmented-button</code> as items
 *
 * @name sap.ui.webc.main.ISegmentedButtonItem
 * @interface
 * @public
 */
const ISegmentedButtonItem = "sap.ui.webc.main.ISegmentedButtonItem";

/**
 * Interface for components that may be slotted inside <code>ui5-select</code> as options
 *
 * @name sap.ui.webc.main.ISelectOption
 * @interface
 * @public
 */
const ISelectOption = "sap.ui.webc.main.ISelectOption";

/**
 * Interface for components that may be slotted inside <code>ui5-select-menu</code> as options
 *
 * @name sap.ui.webc.main.ISelectMenuOption
 * @interface
 * @public
 */
const ISelectMenuOption = "sap.ui.webc.main.ISelectMenuOption";

/**
 * Interface for components that may be slotted inside <code>ui5-tabcontainer</code>
 *
 * @name sap.ui.webc.main.ITab
 * @interface
 * @public
 */
const ITab = "sap.ui.webc.main.ITab";

/**
 * Interface for components that may be slotted inside a <code>ui5-table</code> as rows
 *
 * @name sap.ui.webc.main.ITableRow
 * @interface
 * @public
 */
const ITableRow = "sap.ui.webc.main.ITableRow";

/**
 * Interface for components that may be slotted inside a <code>ui5-table</code> as columns
 *
 * @public
 */
interface ITableColumn {
	isUI5Element: boolean;
}

/**
 * Interface for components that may be slotted inside a <code>ui5-table-row</code> as cells
 *
 * @public
 */
interface ITableCell {
	isUI5Element: boolean;
}

/**
 * Interface for components that represent a token and are usable in components such as <code>ui5-multi-input</code>
 *
 * @public
 */
interface IToken {
	text: string;
	readonly: boolean,
	selected: boolean,
}

/**
 * Interface for tree items for the purpose of <code>ui5-tree</code>
 *
 * @name sap.ui.webc.main.ITreeItem
 * @interface
 * @public
 */
const ITreeItem = "sap.ui.webc.main.ITreeItem";

/**
 * Interface for toolbar items for the purpose of <code>ui5-toolbar</code>
 *
 * @name sap.ui.webc.main.IToolbarItem
 * @interface
 * @public
 */
const IToolbarItem = "sap.ui.webc.main.IToolbarItem";

/**
 * Interface for toolbar select items for the purpose of <code>ui5-toolbar-select</code>
 *
 * @name sap.ui.webc.main.IToolbarSelectOption
 * @interface
 * @public
 */
const IToolbarSelectOption = "sap.ui.webc.main.IToolbarSelectOption";

export {
	IAvatar,
	IBreadcrumbsItem,
	IButton,
	ICardHeader,
	ICalendarDate,
	IColorPaletteItem,
	IComboBoxItem,
	IIcon,
	IInput,
	IInputSuggestionItem,
	IListItem,
	IMenuItem,
	IMultiComboBoxItem,
	ISegmentedButtonItem,
	ISelectOption,
	ISelectMenuOption,
	ITab,
	ITableCell,
	ITableColumn,
	ITableRow,
	IToken,
	ITreeItem,
	IToolbarItem,
	IToolbarSelectOption,
};
