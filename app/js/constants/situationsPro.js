'use strict';

angular.module('ddsApp').constant('situationsPro', [
    {
        id: 'sans_activite',
        label: 'Sans activité'
    },
    {
        id: 'salarie',
        label: 'Salarié'
    },
    {
        id: 'auto_entrepreneur',
        label: 'Auto-entrepreneur'
    },
    {
        id: 'travailleur_saisonnier',
        label: 'Travailleur saisonnier'
    },
    {
        id: 'apprenti',
        label: 'Apprenti'
    },
    {
        id: 'stagiaire',
        label: 'Stagiaire de la formation professionnelle'
    },
    {
        id: 'independant',
        label: 'Travailleur indépendant ou employeur, y compris exploitant agricole'
    },
    {
        id: 'gerant_salarie',
        label: 'Gérant salarié'
    },
    {
        id: 'demandeur_emploi',
        label: 'Demandeur d\'emploi',
        isStatutSpecifique: true
    },
    {
        id: 'etudiant',
        label: 'Étudiant',
        isStatutSpecifique: true
    },
    {
        id: 'retraite',
        label: 'Retraité',
        isStatutSpecifique: true
    }
]);
