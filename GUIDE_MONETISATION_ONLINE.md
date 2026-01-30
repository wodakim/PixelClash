# GUIDE COMPLET : PUBLICITÉS, ONLINE ET PLAY STORE

Ce guide explique comment transformer **Pixel Clash** en une application mobile complète (Android) avec des publicités réelles (AdMob), un classement en ligne (Firebase) et la publication sur le Google Play Store.

---

## 1. Architecture Hybride (CapacitorJS)

Pour mettre votre jeu HTML5 sur le Play Store, nous allons utiliser **Capacitor**. C'est un outil moderne qui "emballe" votre site web dans une application Android native.

### Installation
Vous devez avoir **Node.js** installé sur votre ordinateur.

1.  Ouvrez votre terminal dans le dossier du projet.
2.  Initialisez Capacitor :
    ```bash
    npm install @capacitor/core @capacitor/cli @capacitor/android
    npx cap init "Pixel Clash" com.votreom.pixelclash
    npx cap add android
    ```
    *(Remplacez `com.votreom.pixelclash` par votre identifiant unique)*.

3.  Chaque fois que vous modifiez votre code JS/HTML :
    ```bash
    # Reconstruire le bundle (si vous utilisez un build step, sinon juste copiez)
    # Ici, assurez-vous que vos fichiers index.html et js/ sont dans un dossier (ex: 'dist' ou 'www') configuré dans capacitor.config.json
    npx cap sync
    ```

---

## 2. Intégrer de Vraies Publicités (AdMob)

Actuellement, vous avez des `div` avec "ADVERTISEMENT". Voici comment les remplacer par de vraies bannières AdMob.

### Installation du Plugin
```bash
npm install @capacitor-community/admob
npx cap update
```

### Configuration
Dans votre fichier `js/main.js` (ou au démarrage du jeu), initialisez AdMob :

```javascript
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

export async function initAds() {
    try {
        await AdMob.initialize({
            requestTrackingAuthorization: true,
            testingDevices: ['YOUR_DEVICE_ID'], // Retirer pour la prod
            initializeForTesting: true, // Mettre false pour la prod
        });

        // Afficher la bannière
        showBanner();
    } catch (e) {
        console.error("Erreur AdMob", e);
    }
}

async function showBanner() {
    const options = {
        adId: 'ca-app-pub-xxxxxxxx/yyyyyyy', // VOTRE ID ADMOB (Test ID: ca-app-pub-3940256099942544/6300978111)
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM,
        margin: 0,
        isTesting: true // Mettre false pour la prod
    };
    await AdMob.showBanner(options);
}
```

### Nettoyage du Code Existant
Supprimez les `div` HTML suivants de `index.html` car AdMob affichera une vue native *par-dessus* votre jeu :
```html
<!-- SUPPRIMER CECI -->
<div class="ad-banner top">ADVERTISEMENT</div>
<div class="ad-banner bottom">ADVERTISEMENT</div>
```

---

## 3. Passer en "Online" (Classement & Boutique)

Pour que le classement et la boutique fonctionnent réellement entre les joueurs, il faut un **Backend**. La solution la plus simple et gratuite pour commencer est **Firebase** (Google).

### A. Créer un projet Firebase
1.  Allez sur [console.firebase.google.com](https://console.firebase.google.com).
2.  Créez un projet "PixelClash".
3.  Activez **Firestore Database** (Mode Test pour commencer).
4.  Activez **Authentication** (Méthode "Anonyme" pour ne pas forcer le login, ou "Google").

### B. Connecter le Jeu
Ajoutez le SDK Firebase dans votre `index.html` ou installez-le via npm.

```javascript
// js/core/backend.js (Nouveau Fichier)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Connexion Silencieuse
export async function login() {
    await signInAnonymously(auth);
}

// Envoyer le Score
export async function submitScore(pseudo, trophies) {
    try {
        const user = auth.currentUser;
        if (!user) return;
        await addDoc(collection(db, "leaderboard"), {
            uid: user.uid,
            name: pseudo,
            trophies: trophies,
            date: Date.now()
        });
    } catch (e) {
        console.error("Erreur Score", e);
    }
}

// Lire le Classement
export async function getLeaderboard() {
    const q = query(collection(db, "leaderboard"), orderBy("trophies", "desc"), limit(50));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data());
}
```

### C. Modifier `js/system/leaderboard.js`
Remplacez la génération aléatoire par l'appel à `getLeaderboard()`.

---

## 4. Publication sur le Play Store

1.  **Générer l'APK :**
    ```bash
    npx cap open android
    ```
    Cela ouvre **Android Studio**.

2.  **Configurer le Package :**
    Dans Android Studio, vérifiez le `AndroidManifest.xml`. Assurez-vous que les permissions Internet sont là (Capacitor le fait généralement).

3.  **Signer l'Application :**
    Allez dans `Build > Generate Signed Bundle / APK`.
    Créez une clé de signature (KeyStore) et conservez-la précieusement !
    Choisissez "Android App Bundle" (.aab) pour le Play Store.

4.  **Google Play Console :**
    *   Créez un compte développeur (25$ unique).
    *   Créez une nouvelle fiche "Pixel Clash".
    *   Remplissez les infos (Screenshots, Description).
    *   Uploadez votre fichier `.aab` dans la section "Production".
    *   Attendez la validation (quelques jours).

---

## Résumé des Tâches
1. [ ] Installer Capacitor et générer le projet Android.
2. [ ] Créer un compte AdMob et récupérer les ID de bannières.
3. [ ] Installer le plugin AdMob et ajouter le code d'initialisation.
4. [ ] Configurer Firebase et remplacer le code du Leaderboard.
5. [ ] Créer le compte Google Play Console et uploader le jeu.

Bonne chance pour le lancement !
