import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import CalendarDate from "./CalendarDate.js";
import CalendarLegendItemType from "./types/CalendarLegendItemType.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-special-date</code> component defines a special calendar date to be used inside <code>ui5-calendar</code>,
 * which is visually distinguished from the rest of the dates.
 *
 * @constructor
 * @extends CalendarDate
 * @abstract
 * @public
 * @since 1.23.0
 */
@customElement("ui5-special-date")
class SpecialCalendarDate extends CalendarDate {
	/**
	 * Defines the type of the special date.
	 *
	 * @default "None"
	 * @public
	 */
	@property({ type: CalendarLegendItemType, defaultValue: CalendarLegendItemType.None })
	type!: `${CalendarLegendItemType}`;
}

SpecialCalendarDate.define();

export default SpecialCalendarDate;
