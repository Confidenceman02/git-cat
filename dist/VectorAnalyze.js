class DClassifier {
    constructor(args) {
    }
}
class CxClassifier {
}
class VectorAnalyze {
    analyze(args) {
        switch (args.analyzeProperty) {
            case 'd':
                return new DClassifier({ targetId: args.targetId, analyzeProperty: args.analyzeProperty });
            case 'cx':
                return new CxClassifier;
            default:
                throw new Error('Select either rect or circle');
        }
    }
}
