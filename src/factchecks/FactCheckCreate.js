import React, { useState } from "react";
import {
  Create,
  FormTab,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";
// import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MediaField from "../news/MediaField";

export const styles = {
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const createMediaLibrary = (insertHandler) =>
  window.cloudinary.createMediaLibrary(
    {
      cloud_name: "kinshasa-digital",
      api_key: "621638522781314",
      username: "john_doe@mycompany.com",
      button_class: "myBtn",
      button_caption: "Selectionner une image",
    },
    {
      insertHandler,
    }
  );

const uploadWidgetConfig = {
  cloudName: "kinshasa-digital",
  uploadPreset: "news_uploads",
  maxFileSize: 1500000,
  clientAllowedFormats: ["png", "gif", "jpeg"],
  multiple: false,
  // styles: {
  //   palette: {
  //     link: "#343A40",
  //   },
  // },
  // language: "fr",
  // text: {
  //   fr: {
  //     // https://widget.cloudinary.com/v2.0/global/text.json
  //     or: "Ou",
  //     back: "Retour",
  //     advanced: "Avancé",
  //     close: "Fermer",
  //     no_results: "Aucun résultat",
  //     search_placeholder: "Rechercher des fichiers",
  //     about_uw: "À propos du widget de téléchargement",
  //     menu: {
  //       files: "Mes Fichiers",
  //       web: "Adresse web",
  //       camera: "Caméra",
  //       gsearch: "Recherche d'image",
  //       gdrive: "Google Drive",
  //       dropbox: "Dropbox",
  //       facebook: "Facebook",
  //       instagram: "Instagram",
  //       shutterstock: "Shutterstock",
  //     },
  //     local: {
  //       browse: "Parcourir",
  //       main_title: "Télécharger des fichiers",
  //       dd_title_single: "Glissez-déposez un élément ici",
  //       dd_title_multi: "Glissez et déposez les ressources ici",
  //       drop_title_single: "Déposer un fichier à télécharger",
  //       drop_title_multiple: "Déposer les fichiers à télécharger",
  //     },
  //     queue: {
  //       title: "File d'attente",
  //       title_uploading_with_counter: "Téléchargement de {{num}} fichiers",
  //       title_uploading: "Téléchargement des fichiers",
  //       mini_title: "Téléchargé",
  //       mini_title_uploading: "Téléchargement",
  //       show_completed: "Afficher terminé",
  //       retry_failed: "Échec de la nouvelle tentative",
  //       abort_all: "Abandonner tout",
  //       upload_more: "Importer plus",
  //       done: "Terminé",
  //       mini_upload_count: "{{num}} importé(s)",
  //       mini_failed: "{{num}} a échoué",
  //       statuses: {
  //         uploading: "Téléchargement en cours...",
  //         error: "Erreur",
  //         uploaded: "Terminé",
  //         aborted: "abandonné",
  //       },
  //     },
  //   },
  // },
};

const createUploadWidget = (callback) =>
  window.cloudinary.createUploadWidget(uploadWidgetConfig, callback);

const FactCheckCreate = (props) => {
  const [media, setMedia] = useState([]);
  const uploadWidget = createUploadWidget((error, result) => {
    if (result?.info?.url) {
      console.log(result.info.url);
      // setMedia([result.info.url]);
    }
    if (error) console.log(error);
  });

  // const galleryWidget = createMediaLibrary((data) => {
  //   data.assets.forEach((asset) => {
  //     console.log("Inserted asset:", JSON.stringify(asset, null, 2));
  //   });
  // });

  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Fact Checks">
          <TextInput
            source="titleQuestion"
            multiline
            label="Titre/Question"
            validate={required()}
            autoFocus
          />
          <SelectInput
            source="verdict"
            choices={[
              { id: "draft", name: "draft" },
              { id: "true", name: "true" },
              { id: "false", name: "false" },
            ]}
          />
          <TextInput source="claim" multiline validate={required()} />
          <TextInput source="checkedFact" multiline validate={required()} />
          <RichTextInput source="scentificArgument" validate={required()} />
          <TextInput source="links" validate={required()} />
          <ButtonGroup color="primary" fullWidth>
            <Button
              variant="outlined"
              color="primary"
              // onClick={galleryWidget.show}
            >
              Selectionner une image existante
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={uploadWidget.open}
            >
              Télécharger une nouvelle image
            </Button>
          </ButtonGroup>
          <MediaField label="Image Principale" record={media} />
        </FormTab>
        <FormTab label="Informations liées" path="news"></FormTab>
      </TabbedForm>
    </Create>
  );
};

export default FactCheckCreate;
