export class ForbiddenLandsMonsterTalentSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["forbidden-lands", "sheet", "item"],
            template: "systems/forbidden-lands/model/monster-talent.html",
            width: 400,
            height: 360,
            resizable: false
        });
    }

    getData() {
        const data = super.getData();
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }
}
