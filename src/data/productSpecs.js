export const productSpecs = {
  barite: {
    chemicalComposition: 'BaSO4',
    specificGravity: '4.2 - 4.5',
    hardness: '3.0 - 3.5 (Mohs)',
    solubility: 'Insoluble in water',
    whiteness: '90-95%',
    oilAbsorption: '10-15 g/100g',
  },
  bauxite: {
    chemicalComposition: 'Al2O3.2H2O',
    aluminaContent: '50-60%',
    silicaContent: '< 5%',
    ironOxideContent: '< 20%',
    titaniumDioxideContent: '< 5%',
    lossOnIgnition: '25-30%',
  },
    magnesia: {
        chemicalComposition: 'MgO',
        magnesiaContent: '85-99%',
        bulkDensity: 'Varies by grade',
        lossOnIgnition: '< 1%',
        particleSize: 'Varies by grade',
    },
    anthracite: {
        carbonContent: '86-98%',
        volatileMatter: '2-12%',
        ashContent: '< 10%',
        sulfurContent: '< 1%',
        moistureContent: '< 5%',
    },
    ilmenite: {
        chemicalComposition: 'FeTiO3',
        titaniumDioxideContent: '45-60%',
        ironOxideContent: '30-45%',
        particleSize: 'Varies by grade',
        specificGravity: '4.5 - 5.0',
    },
    fluorspar: {
        chemicalComposition: 'CaF2',
        calciumFluorideContent: '90-98%',
        silicaContent: '< 5%',
        particleSize: 'Varies by grade',
        specificGravity: '3.0 - 3.2',
    },
    coal: {
        energyContent: 'Varies by grade',
        ashContent: 'Varies by grade',
        sulfurContent: 'Varies by grade',
        moistureContent: 'Varies by grade',
        volatileMatter: 'Varies by grade',
    },
    'oilfield-minerals': {
        // You might need separate entries for bentonite, calcium carbonate, etc.
        bentonite: {
            swellingIndex: 'Varies by grade',
            liquidLimit: 'Varies by grade',
            filtrationLoss: 'Varies by grade',
        },
        calciumCarbonate: {
            chemicalComposition: 'CaCO3',
            purity: '> 95%',
            particleSize: 'Varies by grade',
        }
    },
};
