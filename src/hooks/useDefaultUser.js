import { supabaseUrl } from "../services/supabase";

export const imageUrl = `${supabaseUrl}/storage/v1/object/public/avatars/`;

export const DEFAULT_AVATARS = imageUrl + "default-user.jpg";
