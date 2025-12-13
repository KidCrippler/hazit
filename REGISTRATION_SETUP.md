# Hazit Event Registration Setup

## ✅ Completed Implementation

### 1. n8n Workflow Created
**Workflow ID**: `xr6PwGVveBkv9qhH`  
**Name**: Hazit Event Registration  
**Webhook URL**: `https://primary-production-759d0.up.railway.app/webhook/hazit-registration`

#### Workflow Flow:
1. **Registration Webhook** - Receives form data with file upload
2. **Validate File Size & MIME** - Checks file ≤5MB and validates MIME type (PDF, JPG, PNG)
3. **Get Applicant Count** - Queries Google Sheet for current registrations
4. **Check 100 Limit** - IF condition to check if count < 100
   - **YES Path**: Continue to upload
   - **NO Path**: Return 429 error (limit reached)
5. **Upload to Drive** - Uploads file to Google Drive folder with timestamp suffix
6. **Add to Sheet** - Inserts row into Google Sheet
7. **Log Attempt** - Logs registration attempt
8. **Success Response** - Returns 200 success message

#### Features:
- ✅ 5MB file size validation (server-side)
- ✅ MIME type validation (PDF, JPG, PNG)
- ✅ 100 applicant limit enforcement
- ✅ File naming with timestamp suffix: `filename_[timestamp%100000].ext`
- ✅ CORS: Allow all origins (can be updated later)
- ✅ Analytics logging

### 2. Updated RegistrationForm.jsx
**Location**: `/Users/alonc/hazit/event-landing/src/components/RegistrationForm.jsx`

#### Changes Made:
- ✅ Removed all Baserow references
- ✅ Added Israeli phone number validation (supports: 050-1234567, 02-1234567, etc.)
- ✅ Added 5MB file size validation (frontend + backend)
- ✅ Added loading spinner with Loader2 icon
- ✅ Added file size display in MB
- ✅ Disabled form inputs during submission
- ✅ Integrated with n8n webhook
- ✅ Error handling for 100-applicant limit
- ✅ Improved UX with proper feedback messages

### 3. Google Integration
**Google Sheet**: [hazit_applicants](https://docs.google.com/spreadsheets/d/1E72v3beTaFFWPC5NIDDINRNw2AFZ0ku76IiLjLiu5Ek/edit)  
**Google Drive Folder**: [hazit](https://drive.google.com/drive/folders/1esiux86KxfDlDLv9W4kB4cyjUXJ2hnwB)

#### Sheet Columns:
1. Full Name
2. Phone
3. Email
4. File URL
5. Timestamp

---

## 🔧 Required Manual Steps

### 1. Activate the n8n Workflow
The workflow is created but **not yet active**. To activate:

1. Open n8n: https://primary-production-759d0.up.railway.app/
2. Find workflow: "Hazit Event Registration"
3. Click the **"Active"** toggle switch in the top-right
4. Verify the webhook is listening

### 2. Configure Google OAuth Credentials
The workflow needs Google API access for Drive and Sheets:

1. In n8n, go to **Settings → Credentials**
2. Add **Google** credentials (OAuth2)
3. Follow the OAuth flow to authorize:
   - Google Sheets API access
   - Google Drive API access
4. Assign credentials to these nodes:
   - "Get Applicant Count" node
   - "Upload to Drive" node
   - "Add to Sheet" node

### 3. Update CORS (When Ready)
Currently allowing all origins (`*`). To restrict:

1. Edit the workflow in n8n
2. Click on "Registration Webhook" node
3. Update `options.allowedOrigins` to your domain
   - e.g., `https://yourdomain.com`

---

## 🧪 Testing Checklist

### Frontend Validation Tests:
- [ ] Test with empty form (all fields required)
- [ ] Test with invalid Israeli phone numbers
- [ ] Test with invalid email format
- [ ] Test file upload > 5MB (should fail with error message)
- [ ] Test unsupported file types (.txt, .doc, etc.)
- [ ] Verify file size displays correctly

### Backend Workflow Tests:
- [ ] Submit valid form with small PDF file
- [ ] Submit valid form with JPG image
- [ ] Submit with large file (should fail at n8n validation)
- [ ] Check Google Sheet receives data correctly
- [ ] Check Google Drive receives file with correct naming
- [ ] Verify timestamp format in Sheet
- [ ] Test 100-applicant limit (manually add 99 rows, then submit)

### Edge Cases:
- [ ] Submit form twice quickly (concurrent submissions)
- [ ] Network timeout during submission
- [ ] Invalid webhook URL (test error handling)
- [ ] Missing Google credentials in n8n

---

## 📝 Form Field Validations

### Full Name
- Required
- Must not be empty

### Phone (Israeli)
- Required
- Formats accepted:
  - `050-1234567` (mobile with dash)
  - `0501234567` (mobile without dash)
  - `02-1234567` (landline with dash)
  - `021234567` (landline without dash)
- Regex: `/^0(5[0-9]|[2-4]|[8-9]|7[0-9])\d{7}$/`

### Email
- Required
- Standard email format validation
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### File Upload
- Required
- Max size: 5MB
- Accepted formats: PDF, JPG, JPEG, PNG
- Frontend + Backend validation

---

## 🎯 Key Features Implemented

1. **File Size Validation** (5MB limit)
   - Frontend validation with immediate feedback
   - Backend validation in n8n Code node
   - Error message in Hebrew

2. **Israeli Phone Validation**
   - Comprehensive regex for Israeli phone numbers
   - Supports mobile (05x) and landlines (02-04, 08-09, 07x)
   - Auto-cleans spaces and dashes

3. **100 Applicant Limit**
   - Checks Google Sheet row count before accepting
   - Returns 429 status code when limit reached
   - Hebrew error message: "מצטערים, הגענו למספר המקסימלי של משתתפים."

4. **File Naming**
   - Format: `originalfilename_[5-digit-timestamp].ext`
   - Example: `form3010_45782.pdf`
   - Uses `Date.now() % 100000` for uniqueness

5. **Loading State**
   - Animated spinner during submission
   - Disabled form inputs
   - "שולח..." text in Hebrew

6. **Error Handling**
   - Network errors
   - Server errors
   - Validation errors
   - Limit reached errors

---

## 🚀 Next Steps

1. **Activate workflow** in n8n
2. **Configure Google credentials**
3. **Test end-to-end** with real submission
4. **Deploy frontend** changes
5. **Update CORS** when domain is known
6. **Monitor** first few submissions

---

## 🔍 Troubleshooting

### Workflow Not Receiving Requests
- Check if workflow is active
- Verify webhook URL in frontend matches n8n
- Check CORS settings

### Google API Errors
- Verify OAuth credentials are configured
- Check API permissions (Sheets + Drive)
- Ensure folder/sheet IDs are correct

### File Upload Fails
- Check file size < 5MB
- Verify MIME type is supported
- Check Google Drive storage quota

### Sheet Not Updating
- Verify sheet ID: `1E72v3beTaFFWPC5NIDDINRNw2AFZ0ku76IiLjLiu5Ek`
- Check sheet name is "Sheet1"
- Verify column mappings in n8n node

---

## 📊 Monitoring

### n8n Execution History
- View: https://primary-production-759d0.up.railway.app/executions
- Check for failed executions
- Review error logs

### Google Sheet
- Monitor row count approaching 100
- Verify data integrity
- Check timestamp formats

### Google Drive
- Monitor storage usage
- Verify file naming convention
- Check file permissions

---

**Implementation Date**: December 13, 2025  
**Status**: Ready for activation and testing

