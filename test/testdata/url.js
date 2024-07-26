require("dotenv").config();

module.exports = {
  prod: process.env.PROD,
  main: process.env.RELEASE,
  stage: process.env.STAGE,
  promotion: "company/stock/promotion-1311/",
  goods: {
    productRxRecipe: "goods/id208716/",
    productRx: "goods/id104653/",
    productBad: "goods/id105320/",
    productRxPku: "goods/id206924/",
    productOts: "goods/id516085/",
    productWithAnalogs: "goods/id219452/",
    productOutOfStock: "goods/id76044/",
    productExpensive: "goods/id518134/",
    productWithLowPriceId: "goods/id510058",
    productBrandNameId: "goods/id106111",
    productRxRecipeId: "goods/id208716",
    productBadId: "goods/id105320",
    productOnlinePaymentId: "goods/id516767",
    productAlcoholId: "goods/id271770",
    productRxPkuId: "goods/id206924",
  },
  static: {
    withRecipe:
      "goods/drugs/antibacterial/antibiotic/flemoksin_solyutab_astellas/",
    withDelivery:
      "goods/drugs/other/inflammation/nurofen_ekspress_forte_rekitt_benkizer/",
    withDeliveryManyVars: "goods/drugs/pain/fever/nurofen_detskiy/",
    withFilters: "goods/mother/podguzniki_vpityvayushchie_pelenki/podguzniki_pampers_active_baby_dry/",
    withBrand:
      "goods/beauty/kosmetika_po_ukhodu_za_volosami/shampuni/vishi_derkos_vishi/",
    withBonuses: "goods/drugs/diagnostics/omnipak_nikomed/",
  },
  catalog: {
    drugs: "goods/drugs/",
    antibacterial: "goods/drugs/antibacterial/",
    neurology: "goods/drugs/neurology/",
    vaccine: "goods/drugs/immunology/vaccine/entsevir_mikrogen_npo/",
    homoeopathy: "goods/drugs/homoeopathy/",
    prostuda: "meta/prostuda-i-gripp/",
    withAnalogs: "goods/drugs/intoxication/",
  },
  brands: {
    nurofen: "goods/brand/nurofen/",
    withAnalogs: "goods/brand/nurofen/",
  },
  ingredient: {
    paliperidon: "goods/active_ingredient/paliperidon/",
  },
};
