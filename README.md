# 💪 Vico Body Building Lab (VicoBBL)

> 🌐 **Site en ligne : [vicobbl.vercel.app](https://vicobbl.vercel.app)**

**Le laboratoire de ton physique, dans ta poche.** Une application web (Next.js) qui te sert de coach à la salle de sport. Clique sur un muscle du corps humain pour découvrir les meilleures machines/exercices (classés et expliqués), calcule tes besoins caloriques, et suis des routines d'échauffement et d'étirement.

Pensée pour **débutants comme experts**, entièrement en **français** avec un **switch anglais** dans les paramètres.

---

## ✨ Fonctionnalités

- **Carte du corps interactive (SVG)** — vue de face et de dos, ~15 muscles cliquables.
- **Fiche muscle détaillée** : rôle, fonctions anatomiques, conseils d'entraînement, erreurs fréquentes, volume conseillé.
- **Machines & exercices classés** du meilleur au moins prioritaire, avec pour chacun :
  - **pourquoi ce classement**,
  - **avantages** et **inconvénients**,
  - **conseils d'exécution**, niveau et fourchette de répétitions.
- **Nutrition** : calculateur de calories (TDEE) interactif (sèche / maintien / prise de masse) + macros, et fiches explicatives détaillées.
- **Échauffement & Étirements** : routines filtrables par type, zone (haut / bas / complet), durée (court / long) et difficulté (facile / difficile).
- **Bilingue FR/EN** + thème **sombre/clair**, préférences mémorisées dans le navigateur.
- **Responsive**, optimisé mobile (à consulter directement à la salle).

---

## 🚀 Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

Pour un build de production :

```bash
npm run build
npm start
```

---

## ▲ Déploiement sur Vercel

1. Pousse ce dépôt sur GitHub.
2. Sur [vercel.com](https://vercel.com), clique **New Project** et importe le dépôt.
3. Nomme le projet **`vicobbl`** pour obtenir l'URL **`vicobbl.vercel.app`**.
4. Vercel détecte Next.js automatiquement — aucune configuration nécessaire.
5. Clique **Deploy**. 🎉

> URL de production : **[vicobbl.vercel.app](https://vicobbl.vercel.app)**

---

## 🛠️ Stack technique

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Corps humain en **SVG** fait main (aucune dépendance externe, aucun problème de droits d'image).

### Structure

```
src/
  app/            Pages (accueil, muscle/[id], nutrition, mobilite, parametres)
  components/     BodyMap, MuscleDetail, MachineCard, TDEECalculator, Navbar
  data/           muscles.ts, nutrition.ts, mobility.ts  (tout le contenu)
  lib/            i18n (FR/EN + thème), types, chaînes d'interface
```

Tout le contenu est centralisé dans `src/data/` : facile à enrichir ou corriger.

---

## ⚠️ Avertissement

Ce contenu est **éducatif** et ne remplace pas l'avis d'un professionnel de santé ou d'un coach diplômé. En cas de douleur, de blessure ou de doute, consulte un professionnel.

---

## 📚 Sources

Le contenu (fonctions musculaires, classement des exercices, recommandations de volume, formules nutritionnelles) s'appuie sur des références reconnues en science de l'entraînement et de la nutrition :

### Entraînement & anatomie
- **ACSM** — American College of Sports Medicine, *Guidelines for Exercise Testing and Prescription*. <https://www.acsm.org/>
- **NSCA** — National Strength and Conditioning Association, *Essentials of Strength Training and Conditioning*. <https://www.nsca.com/>
- **Schoenfeld, B. J.** — *Science and Development of Muscle Hypertrophy* (recherche sur l'hypertrophie, le volume et l'amplitude). <https://pubmed.ncbi.nlm.nih.gov/?term=schoenfeld+hypertrophy>
- **ExRx.net** — Base de données d'exercices, muscles sollicités et technique. <https://exrx.net/>
- **Physiopedia** — Anatomie et fonctions musculaires. <https://www.physio-pedia.com/>
- **StrongLifts / Stronger by Science** — Ressources sur les mouvements de base et la surcharge progressive. <https://www.strongerbyscience.com/>

### Nutrition
- **Formule de Mifflin-St Jeor** — Mifflin MD, St Jeor ST, et al. (1990), *A new predictive equation for resting energy expenditure in healthy individuals*, Am J Clin Nutr. <https://pubmed.ncbi.nlm.nih.gov/2305711/>
- **ISSN** — International Society of Sports Nutrition, *Position Stands* (protéines, timing des nutriments). <https://jissn.biomedcentral.com/>
- **Helms, E. R., et al.** — *Evidence-based recommendations for natural bodybuilding contest preparation* (protéines, déficit/surplus). <https://jissn.biomedcentral.com/articles/10.1186/1550-2783-11-20>
- **ANSES** — Références nutritionnelles françaises. <https://www.anses.fr/>

> Les recommandations chiffrées (séries, répétitions, grammes de protéines, pourcentages de déficit/surplus) sont des **fourchettes indicatives** issues de la littérature ci-dessus. Chaque individu doit ajuster selon sa propre réponse et son ressenti.

---

Fait avec ❤️ pour la fonte.
