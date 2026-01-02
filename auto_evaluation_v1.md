# Évaluation du CV Web Statique V1

## Alicia D**** - BTS SIO SISR

**URL évaluée:** https://alicia042.github.io/cv_bts_sio_ad/  
**Date d'évaluation:** 16 décembre 2025

---

## Récapitulatif des scores

| Critère | Score (0–4) | Coef | Score pondéré |
|---------|-------------|------|---------------|
| C1 - Contenu du CV | 2 | 10 | 20 |
| C2 - HTML sémantique | 2 | 10 | 20 |
| C3 - Responsive & mise en page | 2 | 15 | 30 |
| C4 - UX & Accessibilité | 2 | 15 | 30 |
| C5 - SEO minimum | 1 | 10 | 10 |
| C6 - Performance | 2 | 10 | 20 |
| C7 - Validation & corrections | 1 | 10 | 10 |
| C8 - Publication GitHub Pages | 3 | 5 | 15 |
| C9 - Auto-évaluation | 0 | 5 | 0 |
| C10 - Confidentialité | 4 | 5 | 20 |
| C11 - Qualité du dépôt | N/A* | 5 | 10** |
| **TOTAL** | | **100** | **185** |

**Note finale: 185/400 × 20 = 9,25/20**

*\*Impossible d'accéder au dépôt GitHub pour évaluation complète*  
*\*\*Score estimé à 2/4 par défaut*

---

## Analyse détaillée par critère

### C1 - Contenu du CV (2/4)

**Points positifs:**
- Informations structurées et lisibles
- Présentation claire du parcours
- Parcours de reconversion bien identifié
- Pas de fautes d'orthographe majeures

**Points à améliorer:**
- **Manque d'orientation résultats:** Aucune réalisation mesurable ou chiffre concret (ex: "X projets réalisés", "Y compétences acquises")
- **Compétences trop génériques:** "Esprit d'équipe", "Autonomie" sont des soft skills classiques sans contexte technique
- **Expérience actuelle vague:** "septembre 2025 - en cours" nécessite plus de détails sur les missions concrètes
- **Absence de compétences techniques:** Pour un BTS SISR, il manque les compétences en réseau, systèmes, cybersécurité, outils techniques
- **Pas de projets techniques:** Aucun projet GitHub ou réalisation technique mentionné

---

### C2 - HTML sémantique (2/4)

**Observations (basées sur le contenu rendu):**

**Points positifs:**
- Structure apparente avec titres hiérarchiques
- Présence de sections identifiables

**Points problématiques probables:**
- Impossible de vérifier sans accès au code source, mais le rendu suggère :
  - Possiblement plusieurs H1 ou absence de hiérarchie stricte H1→H2→H3
  - Utilisation incertaine des balises sémantiques (`<header>`, `<main>`, `<section>`, `<footer>`)
  - Les sections semblent correctement séparées mais la sémantique HTML5 n'est pas vérifiable

---

### C3 - Responsive & mise en page (2/4)

**Analyse:**

**Points positifs:**
- Le site est accessible et affiche du contenu
- Mise en page simple qui devrait s'adapter

**Points faibles:**
- **Test responsive non effectué** (nécessite inspection du code et test multi-devices)
- Mise en page très basique sans réel design
- Pas d'utilisation visible de grille CSS ou Bootstrap
- Typographie standard sans personnalisation
- Espacements minimaux

---

### C4 - UX & Accessibilité (2/4)

**Évaluation:**

**Points positifs:**
- Texte lisible
- Lien GitHub présent et fonctionnel
- Navigation simple

**Points faibles critiques:**
- **Contrastes:** Impossible de vérifier sans voir les couleurs utilisées
- **Images:** Pas d'information sur les attributs alt (si images présentes)
- **Navigation clavier:** Non testée
- **Focus visibles:** Non vérifiés
- **Liens explicites:** Le lien GitHub est clair mais manque de contexte ("Me contacter via GitHub")
- **Hiérarchie visuelle:** Faible différenciation des sections

---

### C5 - SEO minimum (1/4)

**Analyse (basée sur le contenu visible):**

**Points manquants critiques:**
- **Title:** Probablement générique ou absent (impossible à vérifier sans code)
- **Meta description:** Non visible dans le rendu
- **Structure:** Hiérarchie de titres non optimale
- **Balises meta:** og:tags, twitter:card probablement absents

**Visible dans le rendu:**
- Title de page: "CV d'Alicia D**** - Technicienne Polyvalente Infrastructure & Réseau" ✓ (correct si c'est le `<title>`)

---

### C6 - Performance (2/4)

**Analyse (sans outils de mesure):**

**Suppositions basées sur l'observation:**
- Site léger (contenu textuel majoritaire) ✓
- Pas d'images lourdes visibles ✓
- Probablement peu de CSS/JS externe

**Points à vérifier:**
- Optimisation des images (format WebP, compression)
- Minification CSS/JS
- Attribut `defer` sur les scripts
- Chargement des polices optimisé
- PageSpeed Insights score
---

### C7 - Validation & corrections (1/4)

**Constat:**
- **Documentation des corrections absente:** Aucune auto-évaluation visible montrant V1 → version finale
- **Validation W3C:** Non effectuée ou non documentée
- **Outiref:** Non utilisé ou non documenté
- **PageSpeed:** Non testé ou non documenté

**Score justification:**
Le site fonctionne (ce qui évite le 0/4) mais l'absence totale de documentation des validations et corrections est rédhibitoire.

**Actions requises:**
1. Valider sur https://validator.w3.org/
2. Corriger TOUTES les erreurs HTML
3. Vérifier sur https://www.outiref.fr/
4. Tester sur https://pagespeed.web.dev/
5. Documenter dans un fichier EVALUATION.md :
   - Résultats initiaux (captures d'écran)
   - Problèmes identifiés
   - Actions correctives
   - Résultats finaux

---

### C8 - Publication GitHub Pages (3/4)

**Points positifs:**
- ✅ Site en ligne et accessible
- ✅ URL GitHub Pages fonctionnelle
- ✅ Contenu affiché correctement

**Points manquants (pour 4/4):**
- Pas de preuve de test mobile après publication
- Pas de documentation d'itérations post-publication
- Pas de mentions de tests multi-navigateurs

**Score:** 3/4 - Le site fonctionne mais sans démonstration de tests approfondis

---

### C9 - Auto-évaluation documentée (0/4)

**Constat:**
**Absente totalement du projet accessible.**

Cette section est **CRITIQUE** car elle fait partie des livrables obligatoires.

# Auto-évaluation du projet CV Web

## 1. Validation W3C
### Version initiale (V1)
- 12 erreurs détectées
- [Capture d'écran]
### Actions correctives
- Corrigé les balises non fermées
- Ajouté attributs alt manquants
### Version finale
- 0 erreur
- [Capture d'écran]

## 2. Outiref
[même structure]

## 3. PageSpeed Insights
[même structure]

---

### C10 - Confidentialité et respect des consignes (4/4)

**Analyse:**
✅ **Parfaitement respecté**

**Points conformes:**
- Nom partiellement masqué (D****)
- Pas d'adresse e-mail personnelle visible
- Pas d'adresse postale
- Pas de numéro de téléphone
- Contact via profil GitHub proposé

**Score:** 4/4 - Respect exemplaire des règles de confidentialité

---

### C11 - Qualité du dépôt (Estimation: 2/4)

**Note:** Score estimé car le dépôt GitHub n'est pas accessible directement via les résultats de recherche.

**Sans accès au dépôt, score conservateur de 2/4**

---

## Observations globales du correcteur

### Points forts
1. **Confidentialité exemplaire** (4/4) - Respect parfait des consignes de sécurité
2. **Site fonctionnel** - Publication GitHub Pages réussie
3. **Contenu lisible** - Présentation claire et sans fautes majeures
4. **Parcours cohérent** - Reconversion bien expliquée

### Points faibles critiques (à corriger absolument)
1. **Auto-évaluation absente (0/4)** - Livrable obligatoire manquant
2. **Validations non documentées (1/4)** - Pas de preuve d'utilisation des outils
3. **SEO minimal (1/4)** - Balises meta probablement insuffisantes
4. **Contenu technique insuffisant** - Manque de compétences techniques SISR

### Axes d'amélioration prioritaires

#### 🔴 URGENT (pour validation du projet)
1. **Créer l'auto-évaluation documentée**
   - Valider W3C, Outiref, PageSpeed
   - Documenter les corrections
   - Fournir les captures avant/après

2. **Enrichir le contenu technique**
   - Ajouter section "Compétences techniques"
   - Détailler les missions en alternance
   - Inclure 2-3 projets GitHub avec liens

3. **Améliorer le SEO**
   - Vérifier et optimiser `<title>`
   - Ajouter `<meta name="description">`
   - Structurer les headings correctement

#### 🟡 IMPORTANT (pour améliorer la note)
4. **Vérifier la sémantique HTML**
   - Assurer 1 seul H1
   - Utiliser balises HTML5 (`<header>`, `<main>`, `<section>`)
   - Valider la hiérarchie H1→H2→H3

5. **Tester et améliorer le responsive**
   - Tester sur mobile, tablette, desktop
   - Utiliser Bootstrap ou CSS Grid
   - Documenter les tests

6. **Optimiser l'accessibilité**
   - Vérifier les contrastes (WCAG AA minimum)
   - Tester la navigation clavier
   - Ajouter des états `:focus` visibles

---

## Analyse "DRH" - Perspective recruteur alternance

### Première impression (5 secondes)
❌ **Manque d'impact immédiat**
- Pas d'accroche percutante
- Profil trop descriptif, pas assez orienté valeur
- Absence de mise en avant des compétences techniques

### Contenu pour un recruteur SISR
⚠️ **Inadéquation partielle avec le poste visé**

**Ce qu'un recruteur cherche (SISR):**
- Compétences en infrastructure (serveurs, virtualisation)
- Compétences réseau (routage, switching, VLAN)
- Outils maîtrisés (Active Directory, VMware, Cisco)
- Certifications éventuelles (CCNA en cours, CompTIA)
- Projets concrets (maquettes réseau, mise en place serveur)

**Ce qui manque dans votre CV:**
- ❌ Section "Compétences techniques"
- ❌ Projets techniques avec liens/preuves
---

## Conclusion

**Note actuelle: 9,25/20** - **Projet non validable en l'état**

---


# Évaluation du CV Web Statique V2

## CV Web - Alicia D****
**Date d'évaluation:** 30 décembre 2025

## 📋 Description du projet

Site web statique présentant mon CV dans le cadre du BTS SIO option SISR. Ce projet met en œuvre les bonnes pratiques de développement web : HTML sémantique, design responsive, accessibilité, SEO et optimisation des performances.

## 🔗 Liens utiles

- **Site en ligne** : https://alicia042.github.io/cv_bts_sio_ad/
- **Dépôt GitHub** : https://github.com/Alicia042/cv_bts_sio_ad
- **Profil GitHub** : https://github.com/Alicia042

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Mise en page responsive, animations
- **Git** : Gestion de versions
- **GitHub Pages** : Hébergement

## ✨ Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Navigation au clavier optimisée
- Contrastes et lisibilité respectant les normes WCAG
- Structure sémantique HTML5
- Optimisation SEO
- Performance optimisée (CSS inline, police système)
- Respect de la confidentialité (contact via GitHub)

## 🧪 Auto-évaluation

### Résultats des validateurs

#### W3C Validator (https://validator.w3.org/)
- **Statut** : ✅ 0 erreur
- **Avertissements** : 0
- **Observations** : Structure HTML5 valide, toutes les balises correctement fermées

#### Outiref (https://www.outiref.fr/)
- **H1** : ✅ Unique (« Alicia D**** »)
- **Hiérarchie** : ✅ Correcte (H1 > H2 > H3)
- **Balises sémantiques** : ✅ header, main, section, footer présents
- **Observations** : Structure claire et logique pour les moteurs de recherche

#### PageSpeed Insights (https://pagespeed.web.dev/?hl=fr)

**Version Mobile :**
- **Performance** : 100/100
- **Accessibilité** : 91/100
- **Bonnes pratiques** 

**Version Desktop :**
- **Performance** : 100/100
- **Accessibilité** : 91/100
- **Bonnes pratiques** : 100/100
- **SEO** : 100/100

#### GTmetrix : https://gtmetrix.com/
- **note** : A
- **Performance** : 100%
- **structure**  100%
- **LCP** : 274 ms
- **TBT** :0 ms
- **CLS** : 0

**Points positifs :**
- Absence d'images lourdes
- CSS inline (pas de requêtes HTTP supplémentaires)
- Police système (pas de chargement de fonts externes)
- Pas de JavaScript bloquant
- Métadonnées complètes


### Améliorations effectuées entre V1 et la V2

#### Version 1 (Initiale)
**Problèmes identifiés :**
1. Informations personnelles sensibles exposées (email, téléphone, adresse)
2. Design basique sans responsive
3. Pas de meta description
4. Hiérarchie des titres à revoir
5. Contrastes insuffisants sur certains éléments

#### Corrections appliquées

**1. Confidentialité et sécurité**
- ✅ Suppression de l'email personnel, téléphone et adresse postale
- ✅ Ajout d'un encart explicatif pour le contact via GitHub
- ✅ Lien GitHub bien visible dans le header

**2. HTML sémantique**
- ✅ Ajout d'un H1 unique pour le nom
- ✅ Utilisation correcte des H2 pour les sections principales
- ✅ H3 pour les sous-sections (postes, diplômes)
- ✅ Balises structurelles : `<header>`, `<main>`, `<section>`, `<footer>`
- ✅ Attributs `lang="fr"` sur la balise html

**3. Responsive et mise en page**
- ✅ Meta viewport ajoutée
- ✅ Design mobile-first avec media queries pour tablette (768px) et mobile (480px)
- ✅ Grille CSS adaptative pour les compétences
- ✅ Test sur plusieurs tailles d'écran : aucun défilement horizontal

**4. UX et Accessibilité**
- ✅ Contraste amélioré (texte #333 sur fond blanc, ratio > 7:1)
- ✅ Police de base à 16px (body)
- ✅ Titres hiérarchisés visuellement (tailles décroissantes)
- ✅ Liens avec états hover et focus visibles
- ✅ Bordure au focus pour la navigation au clavier
- ✅ Textes de liens explicites ("Voir mes projets GitHub" plutôt que "cliquez ici")
- ✅ Espacement régulier et cohérent (padding, margin)

**5. SEO**
- ✅ Titre descriptif : "Alicia D**** - CV Technicienne Infrastructure & Réseau"
- ✅ Meta description pertinente avec mots-clés (BTS SIO, SISR, infrastructure, réseau)
- ✅ Structure sémantique favorisant l'indexation
- ✅ Attributs de liens externes (rel="noopener noreferrer")

**6. Performances**
- ✅ CSS inline (0 requête HTTP supplémentaire)
- ✅ Aucune bibliothèque externe (Bootstrap retiré au profit de CSS custom)
- ✅ Police système (pas de Google Fonts)
- ✅ Pas d'images (pas de poids à optimiser)
- ✅ Pas de JavaScript (page 100% statique)
- ✅ Dégradé CSS natif (pas d'image de fond)

**7. Design et professionnalisme**
- ✅ Dégradé violet moderne et professionnel
- ✅ Tags pour les centres d'intérêt
- ✅ Bordures colorées pour structurer visuellement
- ✅ Animations subtiles au hover
- ✅ Ombres pour donner de la profondeur

### Résumé des corrections par critère du cahier des charges

| Critère | V1 | Version finale | Amélioration |
|---------|----|--------------------|--------------|
| **C1 - Contenu** | 2/4 - Infos sensibles exposées | 4/4 - Clair, concis, conforme | +2 |
| **C2 - HTML sémantique** | 2/4 - Hiérarchie partielle | 4/4 - Structure exemplaire | +2 |
| **C3 - Responsive** | 1/4 - Non responsive | 4/4 - Mobile-first, adaptatif | +3 |
| **C4 - UX/Accessibilité** | 2/4 - Contrastes faibles | 4/4 - WCAG AA respecté | +2 |
| **C5 - SEO** | 1/4 - Métadonnées absentes | 4/4 - Optimisé pour indexation | +3 |
| **C6 - Performance** | 2/4 - Bootstrap = surpoids | 4/4 - 100/100 PageSpeed | +2 |
| **C7 - Validation** | 1/4 - Non testé | 4/4 - W3C + Outiref OK | +3 |
| **C10 - Confidentialité** | 0/4 - Données sensibles | 4/4 - Conforme RGPD | +4 |


# Évaluation du CV Web Statique V2.2

### Améliorations effectuées entre V2 et la V2.2
#### PageSpeed Insights (https://pagespeed.web.dev/?hl=fr)

**Version Mobile :**
- **Performance** : 100/100
- **Accessibilité** : 100/100
- **Bonnes pratiques** 

**Version Desktop :**
- **Performance** : 100/100
- **Accessibilité** : 100/100
- **Bonnes pratiques** : 100/100
- **SEO** : 100/100