include .env

deploy-resend-first-qvs:
	npx supabase functions deploy resend-first-qvs --project-ref ${SUPABASE_PROJECT_ID}

sync-types:
	cp ../src/app/types/database.ts ../supabase/functions/types/database.ts

create-edge-function:
	 npx supabase functions new ${name}

